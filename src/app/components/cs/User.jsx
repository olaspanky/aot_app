"use client"

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { data } from '../../dash/data/disputedata';
import { useSelector } from 'react-redux';
import { DashboardPages } from '@/store/slice/dashboardSlice';
import { useState } from 'react'
import ModalComponent from './Modal';




const columns = [
  { field: 'id', headerName: 'User ID', width: 70 },
  { field: 'date', headerName: 'Date',type:"string", width: 100 },
  { field: 'name', headerName: 'Name', width: 100 },
  {
    field: 'email',
    headerName: 'Email',
    type: 'email',
    width: 130,
  },
  {
    field: 'phone',
    headerName: 'Phone No.',
    type:"number",
    width: 130,
    
  },
  {
    field: 'access',
    headerName: 'Account Type',
    type:"string",
    width: 130,
    renderCell: (params) => {
      // Change the color based on a certain condition
      const access = params.value;
      const color = "#FF7D00"

      return (
        <span style={{ color }}>{access}</span>
      );
    },
  
    
    
  },

];

const additionalColumnData=[
 
  {
    
    field: 'actions',
    headerName: 'Actions',
    width: 230,
    renderCell: (params) => {

      const [openModal, setOpenModal] = useState(false);
      const [selectedRowData, setSelectedRowData] = useState(null);
    
      // ...
    
      const handleRowClick = (params) => {
        setSelectedRowData(params.row);
        setOpenModal(true);
      };
    
      const handleCloseModal = () => {
        setOpenModal(false);
      };

    
        
      return (
        
        <div className="">
        <div className='flex gap-3'>
        <button className='rounded-lg border border-[#16BD31] px-[17px] text-sm p-[8px]' 
        onClick={() => handleRowClick(params)} data-toggle="modal" data-target="#myModal">
          <h1 className='text-[#16BD31] text-[16px]'>Verify</h1>
        </button>
        <button className='rounded-lg border border-[#2455D2] px-[17px] text-sm p-[8px]' 
        onClick={() => handleRowClick(params)} data-toggle="modal" data-target="#myModal">
          <h1 className='text-[#2455D2] text-[16px]'>Download</h1>
        </button>
       
        </div>

          
          {openModal && selectedRowData?.id === params.row.id && (
            <ModalComponent rowData={selectedRowData} open={openModal} handleClose={handleCloseModal} />
          )}
          
       

        </div>


        


        
        
      );
    },
  },
]




export default function User() {

  const tableStyles = {
    border: 'none',
  };

  const cellStyles = {
    borderBottom: 'none',
  };

  const columnHeaderStyles = {
    borderRight: 'none',
  };


  const [customColumn,setCustomColumn]=React.useState(columns);
  const [filter,setFilter]=React.useState("");
  const currentPage=useSelector((state)=>state.dashboardState.currentPage);

React.useEffect(()=>{
if(currentPage == DashboardPages.INDIVIDUAL) {setCustomColumn([...columns,...additionalColumnData]);
  setFilter("individual")
}
else setCustomColumn(columns);

if(currentPage==DashboardPages.LOGISTICS_USERS) setFilter("user");
if(currentPage==DashboardPages.COMPANY) setFilter("company");
if(currentPage==DashboardPages.ALL_USERS) setFilter("");




},[currentPage])


  return (
    <div style={{width: '100%'}} className="h-auto text-[16px]">
      <DataGrid
      
      style={tableStyles}
      classes={{
        cell: 'custom-cell',
        columnHeader: 'custom-column-header',
      }}
        className='text-[16px] h-full'
        rows={!!filter ? data.filter((item)=>item.access==filter) : data}
        columns={customColumn}
        rowHeight={40}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10},
          },
        }}
        pageSizeOptions={[15]}
        
      />
      <style>
        {`
        .custom-cell {
          border-bottom: none;
        }

        .custom-column-header {
          border-right: none;
        }
      `}
      </style>

     

      
    </div>
  );
}

