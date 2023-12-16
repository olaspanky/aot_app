"use client"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { staff } from '../../dash/data/disputedata';
import { useState } from 'react'
import ModalComponent from './Modal';





const columns = [
  { field: 'id', headerName: 'User Id', width: 100 },
  { field: 'name', headerName: 'Name',type:"string", width: 100 },
  { field: 'email', headerName: 'E-mail', width: 200 },
 
  {
    field: 'phone',
    headerName: 'Phone Number',
    type:"string",
    width: 150,
    renderCell: (params) => {
      // Change the color based on a certain condition
      const access = params.value;
      const color = "#FF7D00"

      return (
        <span style={{ color }}>{access}</span>
      );
    },
  
    
    
  },
  
  { field: 'status', headerName: 'Role', width: 200 },


  {
    
    field: 'actions',
    headerName: 'Actions',
    width: 200,
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
        
        <>
        <div className="">
        <div className='flex gap-3'>
        <button className='rounded-lg border border-[#D4C51D] px-[17px] text-sm p-[8px]' 
        onClick={() => handleRowClick(params)} data-toggle="modal" data-target="#myModal">
          <h1 className='text-[#D4C51D] text-[16px]'>Suspend</h1>
        </button>
        <button className='rounded-lg border border-[#C21010] px-[17px] text-sm p-[8px]' 
        onClick={() => handleRowClick(params)} data-toggle="modal" data-target="#myModal">
          <h1 className='text-[#C21010] text-[16px]'>Block</h1>
        </button>
       
        </div>

          
          {openModal && selectedRowData?.id === params.row.id && (
            <ModalComponent rowData={selectedRowData} open={openModal} handleClose={handleCloseModal} />
          )}
          
       

        </div>
          
       

        </>


        


        
        
      );
    },
  },

];






export default function Control() {

  const tableStyles = {
    border: 'none',
  };

  const cellStyles = {
    borderBottom: 'none',
  };

  const columnHeaderStyles = {
    borderRight: 'none',
  };





  return (
    <div style={{width: '100'}} className="h-auto text-[16px]">
      <DataGrid
      
      style={tableStyles}
      classes={{
        cell: 'custom-cell',
        columnHeader: 'custom-column-header',
      }}
        className='text-[16px] h-full'
        rows={staff}
        columns={columns}
        rowHeight={50}
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

