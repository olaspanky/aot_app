"use client"

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { data3 } from '../../dash/data/disputedata';
import { useSelector } from 'react-redux';
import { PromotionsPages } from '@/store/slice/promotionsSlice';
import { useState } from 'react'
import ModalComponent from './Modal';
import bin from "@/assets/delete.png";
import edit from "@/assets/edit.png";
import Image from 'next/image';




const columns = [
  { field: 'id', headerName: 'S/N', width: 100 },
  { field: 'promo', headerName: 'Promo Code',type:"string", width: 200 },
  { field: 'discount', headerName: 'Discount(%)', width: 100 },
 
  {
    field: 'status',
    headerName: 'Status',
    type:"string",
    width: 150,
    renderCell: (params) => {
      // Change the color based on a certain condition
      const access = params.value;
      const color = "green"

      return (
        <span style={{ color }}>{access}</span>
      );
    },
  
    
    
  },

  {
    
    field: 'actions',
    headerName: 'Actions',
    width: 300,
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
        <div className='flex gap-3'>
       
        <button
  className={`${params.row.activate ? "border-[#552A00]" : "border-[#16BD31]"} text-[16px]} rounded-lg border  w-[99px] h-[36px]`} 
  onClick={() => handleRowClick(params)}
 
>
  <h1 className={` ${params.row.activate ? "text-[#552A00]" : "text-[#16BD31]"} text-[16px]`}>
    {params.row.activate ? "Activate" : "Deactivate"}
  </h1>
</button>
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
          
       

        </>


        


        
        
      );
    },
  },

];






export default function Promotions() {

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
  const currentPage=useSelector((state)=>state.promotionsState.currentPage);

React.useEffect(()=>{


if(currentPage==PromotionsPages.ALL_PROMOTIONS) setFilter("");
if(currentPage==PromotionsPages.ACTIVE) setFilter("active");
if(currentPage==PromotionsPages.INACTIVE) setFilter("inactive");




},[currentPage])


  return (
    <div style={{width: '100'}} className="h-auto text-[16px]">
      <DataGrid
      
      style={tableStyles}
      classes={{
        cell: 'custom-cell',
        columnHeader: 'custom-column-header',
      }}
        className='text-[16px] h-full'
        rows={!!filter ? data3.filter((item)=>item.status==filter) : data3}
        columns={customColumn}
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

