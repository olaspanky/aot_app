"use client"

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { staff } from '../../../app/dash/data/disputedata';
import { useState } from 'react'
import ModalComponent from './Modal';
import bin from "@/assets/delete.png";
import edit from "@/assets/edit.png";
import Image from 'next/image';
import AddstaffModal from './AddstaffModal';




const columns = [
  { field: 'id', headerName: 'User Id', flex: 1 },
  { field: 'name', headerName: 'Name',type:"string", flex: 1 },
  { field: 'email', headerName: 'E-mail', flex: 1 },
 
  {
    field: 'phone',
    headerName: 'Phone Number',
    type:"string",
    flex: 1,
    renderCell: (params) => {
      // Change the color based on a certain condition
      const access = params.value;
      const color = "#FF7D00"

      return (
        <span style={{ color }}>{access}</span>
      );
    },
  
    
    
  },
  
  { field: 'status', headerName: 'Role', flex: 1 },


  {
    
    field: 'actions',
    headerName: 'Actions',
    flex: 1,
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
        <div className='grid place-content-center w-[36px] h-[36px] bg-[#ff000035]'>
        <Image src={bin} width="" height="" alt='image'/>
        </div>
        <div className='grid place-content-center w-[36px] h-[36px] bg-[#2455d242]'>
        <Image src={edit} width="" height="" alt='image'/>
        </div>

        
       
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






export default function Staffs() {

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
    <div style={{}} className="h-auto w-[80vw]  text-[5px] cursor-pointer">
            <div className='h-[100vh]'>

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
      </div>
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

     
          <div className="grid place-content-center top-auto">
          <AddstaffModal/>
          </div>
      
    </div>
  );
}

