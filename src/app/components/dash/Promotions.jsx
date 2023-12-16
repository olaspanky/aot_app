"use client"

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { PromotionsPages } from '@/store/slice/promotionsSlice';
import bin from "@/assets/delete.png";
import edit from "@/assets/edit.png";
import Image from 'next/image';
import { useGetPromoCodesQuery } from '../../api/apiSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PromoModal from './PromoModal';
import {useGetRiderDetailsQuery,useLazyGetUserDetailsQuery} from '../../api/apiSlice';
import {setCurrentPagination} from "@/store/slice/paginationSlice" 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircularProgress from '@mui/material/CircularProgress';
import { useDeleteAdminPromoCodeMutation } from '../../api/apiSlice';




const PageNumber = ({ pageNumber, isSelected, onClick }) => (
  <div
    onClick={onClick}
    className={`px-2 py-1 rounded-md ${
      isSelected ? 'bg-[#FF7D00] text-white' : 'bg-gray-200'
    } cursor-pointer`}
  >
    {pageNumber}
  </div>
);




const columns = [
  { field: 'discount_id', headerName: 'S/N', flex: 1 },
  { field: 'discount_code', headerName: 'Promo Code', type: 'string', flex: 1 },
  { field: 'discount', headerName: 'Discount(%)', flex: 1,
  valueFormatter: (params) => {
    const originalValue = params.value || '';
    // Capitalize the first letter of each word
    const formattedValue = originalValue
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return formattedValue;
  }, },
 
  {
    field: 'status',
    headerName: 'Status',
    flex:1,
    valueFormatter: (params) => {
      const originalValue = params.value || '';
      // Capitalize the first letter of each word
      const formattedValue = originalValue
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      return formattedValue;
    },
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
    headerName: 'Actions',
    sortable: false,
    flex:2,
    renderCell: (params) => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [promoCodeDataForEdit, setPromoCodeDataForEdit] = useState(null);
    
      const handleEditClick = (rowData) => {
        setPromoCodeDataForEdit(rowData);
        setIsModalOpen(true);
      };
    
      const handleSaveChanges = (editedData) => {
        setIsModalOpen(false);
      };

      const [deletePromoCodeMutation] = useDeleteAdminPromoCodeMutation();

  const handleDeleteClick = async (rowData) => {
    try {
      // Extract the id from rowData
      const id = rowData.id;

      // Trigger the mutation function with the extracted id
      const response = await deletePromoCodeMutation(id);
      console.log('Delete mutation success:', response);
      // Add any further handling after a successful deletion

    } catch (error) {
      console.error('Delete mutation error:', error);
      // Handle the error here
    }
  };
      

     
      // Extract the id from rowData
          

     
    
      

      console.log("params", params.id)
    
      return (
        <>
          <div className='flex gap-3'>
           
            {/* Your code for other elements here */}
            <div className='grid place-content-center w-[36px] h-[36px] bg-[#ff000035]'>
              <Image className='w-full h-full' src={edit} width="" height="" alt="image" onClick={() => handleEditClick(params.row)} />
            </div>
            <div onClick={() => handleDeleteClick(params.row)} className='grid place-content-center w-[36px] h-[36px] bg-[#ff000035]'>
              <Image className='w-full h-full' src={bin} width="" height="" alt="image"  />
            </div>
    
            <PromoModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)} // Close the modal
              promoCodeData={promoCodeDataForEdit} // Pass the data for editing
              onSave={handleSaveChanges} // Callback to handle saving changes
            />
          </div>
        </>
      );
    },
  }
    
];

export default function promotions({ searchQuery  }) {
  const [customColumn, setCustomColumn] = useState(() => columns);
  const [filter, setFilter] = useState('');
  const [filteredUsersState, setFilteredUsersState] = useState([]);
  const currentPage = useSelector((state) => state.promotionsState.currentPage);
  const currentPagination = useSelector((state) => state.paginationState.currentPagination);
  const { data, error, isLoading } = useGetPromoCodesQuery({ page: currentPagination });
  

  const dispatch = useDispatch();
  const users = data?.data || [];
  const usersWithIds = users.map((user, index) => ({
    ...user,
    id: index
  }));


  const [openModal, setOpenModal] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [riderDetails, setRiderDetails] = useState(null);
  const [trigger] = useLazyGetUserDetailsQuery(); // Use the query hook

  const [totalPages, setTotalPages] = useState(1); // Initialize with 1

  // Fetch the total number of pages from the backend
  

  useEffect(() => {
    if (data) {
      console.log('Total Pages from API:', data?.meta?.last_page);
      setTotalPages(data?.meta?.last_page || 1);
    }
  }, [data]);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const middlePage = Math.floor((currentPagination + totalPages) / 2);

    for (let i = middlePage - 2; i <= middlePage + 2; i++) {
      if (i >= 1 && i <= totalPages) {
        pageNumbers.push(
          <PageNumber
            key={i}
            pageNumber={i}
            isSelected={i === currentPagination}
            onClick={() => handlePageChange(i)}
          />
        );
      }
    }

    return pageNumbers;
  };

  const handlePageChange = (newPage) => {
    dispatch(setCurrentPagination(newPage));
  };
  const handlePreviousPage = () => {
    dispatch(setCurrentPagination(currentPagination - 1)); // Dispatch action to decrease current page
  };

  const handleNextPage = () => {
    dispatch(setCurrentPagination(currentPagination + 1)); // Dispatch action to increase current page
  };


  useEffect(() => {
    if (data){
    let filteredUsersData = [...usersWithIds];
   
    if (currentPage === PromotionsPages.ACTIVE) {
      filteredUsersData = filteredUsersData.filter((item) => item.status === 'active');
      setFilter('active');
    }
    if (currentPage === PromotionsPages.INACTIVE) {
      filteredUsersData = filteredUsersData.filter((item) => item.status === 'inactive');
      setFilter('inactive');
    }

    if (!!searchQuery) {
      filteredUsersData = filteredUsersData.filter(
        (item) => item.discount_code.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    console.log('filteredUsersData:', filteredUsersData);
console.log('filteredUsersData:', filteredUsersData);
    // Set the filtered users in state
    setFilteredUsersState(filteredUsersData);
    console.log('filteredUsersData:', filteredUsersData);

  }
  }, [currentPage, searchQuery, data]);
  console.log('currentPage:', currentPage);
console.log('filter:', filteredUsersState);
console.log('data:', usersWithIds);



  if (isLoading) {
    return  <div className="flex justify-center items-center h-[65vh]">
    <CircularProgress />
  </div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const tableStyles = {
    border: 'none',
    fontSize: "2.5em", /* Adjust the font size as needed */

  };
  const cellStyles = {
    borderBottom: 'none',
  };
  const columnHeaderStyles = {
    borderRight: 'none',
  };
  return (
    <div style={{}} className="h-auto w-[80vw]  text-[5px] cursor-pointer">
      <div className='h-[68vh]'>
      <DataGrid
  
  style={tableStyles}
  classes={{
    cell: 'custom-cell',
    columnHeader: 'custom-column-header',
  }}
  rows={filteredUsersState}
  columns={customColumn}
  rowHeight={52}  
  hideFooterPagination={true}  />
  </div>
       
  <div className='w-full px-9 text-sm flex justify-between text-[5em]'>
  <button  onClick={currentPagination === 1 ? null : handlePreviousPage} className='flex justify-center items-center gap-2'>
    {/* Gray out the "Back" button when on the first page */}
    <div
     
      className={`px-1 py-1 rounded-md ${
        currentPagination === 1 ? 'bg-gray-300' : 'bg-[#FF7D00]'
      } grid place-content-center`}
    >
      <ArrowBackIosIcon size="4" sx={{ color: currentPagination === 1 ? 'white' : 'white' }} />
    </div>
    {/* Use a button element */}
    <button
      onClick={handlePreviousPage}
      disabled={currentPagination === 1}
    >
      Prev
    </button>
  </button>
  <div className="flex items-center gap-2">
    {renderPageNumbers()}
  </div>
  <button       onClick={currentPagination === totalPages ? null : handleNextPage}
 className='flex justify-center items-center gap-2 '>
    {/* Use a button element */}
    <button
      onClick={handleNextPage}
      disabled={currentPagination === totalPages}
    >
      Next
    </button>
    {/* Gray out the "Next" button when on the last page */}
    <div
      className={`px-1 py-1 rounded-md ${
        currentPagination === totalPages ? 'bg-gray-300' : 'bg-[#FF7D00]'
      } grid place-content-center`}
    >
      <ArrowForwardIosIcon
      size="4"
        sx={{ color: currentPagination === totalPages ? 'white' : 'white' }}
      />
    </div>
  </button>
</div>

     
      {openModal && selectedRowData && riderDetails && (
        <ModalComponent
          rowData={selectedRowData}
          riderDetails={riderDetails}
          open={openModal}
          handleClose={() => setOpenModal(false)}
        />
      )}
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


