import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { DashboardPages, setCurrentPage } from '@/store/slice/dashboardSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useGetDashboardQuery } from '../../api/apiSlice';
import {useGetRiderDetailsQuery,useLazyGetUserDetailsQuery} from '../../api/apiSlice';
import {useGetCustomerDeliveryQuery} from '../../api/apiSlice';
import {setCurrentPagination} from "@/store/slice/paginationSlice" 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircularProgress from '@mui/material/CircularProgress';
import { useActivateUserMutation, useDeleteUserMutation  } from '../../api/apiSlice';



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
  { field: 'user_id', headerName: 'User ID', flex: 1 },
  { field: 'date', headerName: 'Date of Delivery', type: 'string', flex: 1 },
  { field: 'item', headerName: 'Item', flex: 1,
  valueFormatter: (params) => {
    const originalValue = params.value || '';
    // Capitalize the first letter of each word
    const formattedValue = originalValue
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return formattedValue;
  }, },
  
  { field: 'from', headerName: 'From.', type: 'string', flex:1 },
  { field: 'to', headerName: 'To.', type: 'string', flex:1 },
  {
    field: 'cost',
    headerName: 'Amount',
    type: 'string',
    flex:1,
    
      
    },
  
    
  ,]

const additionalColumnData = [
  // ... other 
  
    
];

export default function Usertable({ searchQuery,  }) {
  const [customColumn, setCustomColumn] = useState(() => columns);
  const [filter, setFilter] = useState('');
  const [filteredUsersState, setFilteredUsersState] = useState([]);
  const currentPage = useSelector((state) => state.dashboardState.currentPage);
  const currentPagination = useSelector((state) => state.paginationState.currentPagination);


  const { data, error, isLoading } = useGetCustomerDeliveryQuery({ page: currentPagination });

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

  const handleRowClick = async (rowData) => {
    try {
      console.log("row data is", rowData);
      const user_id = rowData.user_id; // Use user_id from rowData
      console.log('Fetching rider details for user ID:', user_id);
      setSelectedRowData(rowData);

      // Fetch rider details using the user_id
      const response = await trigger(user_id);
      if (response.data) {
        setRiderDetails(response.data);
        setOpenModal(true);
      } else {
        // Handle error here
      }
    } catch (error) {
      console.error('Error fetching rider details:', error);
      // Handle error
    }
  };

  useEffect(() => {
    if (data) {
    let filteredUsersData = [...usersWithIds];
    if (currentPage === DashboardPages.INDIVIDUAL) {
      setCustomColumn([...columns, ...additionalColumnData]);
      filteredUsersData = filteredUsersData.filter((item) => item.type === 'individual');
      setFilter('individual');
    } else {
      setCustomColumn(columns);
      setFilter('');
    }
    if (currentPage === DashboardPages.LOGISTICS_USERS) {
      filteredUsersData = filteredUsersData.filter((item) => item.type === 'rider');
      setFilter('rider');
    }
    if (currentPage === DashboardPages.COMPANY) {
      filteredUsersData = filteredUsersData.filter((item) => item.type === 'company');
      setFilter('company');
    }

    if (!!searchQuery) {
      filteredUsersData = filteredUsersData.filter(
        (item) => item.item.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    // Set the filtered users in state
    setFilteredUsersState(filteredUsersData);
    console.log('filteredUsersData:', filteredUsersData);

  }
  }, [currentPage, searchQuery, data]);
  console.log('currentPage:', currentPage);
console.log('searchQuery:', searchQuery);
console.log('filter:', filteredUsersState);


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
    <div style={{}} className="h-auto  text-[5px] cursor-pointer">
      <div className='h-[70vh]'>
      <DataGrid
  onRowClick={(params) => handleRowClick(params.row)}
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
            border-right: ;
          }
          .custom-column-header {
            border-right: none;
          }
        `}          
      </style>
    </div>
  );
}

