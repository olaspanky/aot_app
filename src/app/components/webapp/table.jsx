"use client"

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { data } from '../../dash/data/disputedata';
import { useSelector } from 'react-redux';
import { DashboardPages } from '@/store/slice/dashboardSlice';
import { useState } from 'react'
import ModalComponent from './Delmodal';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';





const columns = [
  { field: 'id', headerName: 'User ID', width: 70 },
  { field: 'date', headerName: 'Date',type:"string", width: 130 },
  { field: 'name', headerName: 'Name', width: 130 },
  {
    field: 'email',
    headerName: 'Email',
    type: 'email',
    width: 150,
  },
  {
    field: 'phone',
    headerName: 'Phone No.',
    type:"number",
    width: 130,
    
  },
  {
    field: 'access',
    headerName: 'Account ',
    type:"string",
    width: 70,
    renderCell: (params) => {
      // Change the color based on a certain condition
      const access = params.value;
      const color = "#FF7D00"

      return (
        <span style={{ color }}>{access}</span>
      );
    },
  
    
    
  },




 
  {
    
    field: 'actions',
    headerName: '',
    width: 50,
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
        
        <KeyboardArrowRightIcon onClick={() => handleRowClick(params)} data-toggle="modal" data-target="#myModal"/>
        

          
          {openModal && selectedRowData?.id === params.row.id && (
            <ModalComponent rowData={selectedRowData} open={openModal} handleClose={handleCloseModal} />
          )}
          
       

        </div>


        


        
        
      );
    },
  },
]




export default function Table() {

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
    <div  className="h-auto w-[100%] text-[16px]">
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

