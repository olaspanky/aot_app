import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { DashboardPages, setCurrentPage } from '@/store/slice/dashboardSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ModalComponent from './Modal';
import { useGetDashboardQuery } from '../../api/apiSlice';
import {useGetRiderDetailsQuery,useLazyGetUserDetailsQuery, useLazyGetRidersVerificationQuery} from '../../api/apiSlice';
import {setCurrentPagination} from "@/store/slice/paginationSlice" 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "../../shared/scrollbar.css"
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
  { field: 'created_at', headerName: 'Date', type: 'string', flex: 1 },
  { field: 'name', headerName: 'Name', flex: 1,
  valueFormatter: (params) => {
    const originalValue = params.value || '';
    // Capitalize the first letter of each word
    const formattedValue = originalValue
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return formattedValue;
  }, },
  { field: 'email', headerName: 'Email', type: 'email', flex: 1,
  valueFormatter: (params) => {
    const originalValue = params.value || '';
    // Capitalize the first letter of each word
    const formattedValue = originalValue
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return formattedValue;
  }, },
  { field: 'phone_number', headerName: 'Phone No.', type: 'number', flex:1 },
  {
    field: 'type',
    headerName: 'Account Type',
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
  
    
  },]

const additionalColumnData = [
  // ... other 
  {
    field: 'actions',
    headerName: 'Actions',
    sortable: false,
    flex:2,
    renderCell: (params) => {
      const userId = params.row.user_id;

      console.log('params:', params); // Log the entire params object
console.log('userId:', userId);   // Log the userId value
    
      const [activateUser, { isLoading: isActivating, isSuccess, isError: activateError }] = useActivateUserMutation();
      const [deleteUser, { isLoading: isDeleting, isDeleted, isError: deleteError }] = useDeleteUserMutation();
    
      const handleActivateUser = () => {
        if (window.confirm('Are you sure you want to verify this user?')) {
          activateUser(userId);
          setIsSuccess(true);
        }
      };
    
      const handleRejectUser = () => {
        if (window.confirm('Are you sure you want to verify this user?')) {

        deleteUser(userId);
        }
      };
    
      const buttonColorClass = isSuccess ? 'bg-[#00FF00]' : 'border-[#16BD31]';
      const activationButtonColorClass = isSuccess ? 'bg-[#00FF00]' : 'border-[#16BD31]';
      const rejectButtonColorClass = isDeleted ? 'bg-[#C21010]' : 'border-[#C21010]';
    
      return (
        <div className="w-full">
          <div className="flex gap-3">
            <button
              className={`rounded-lg border px-[1em] text-sm p-[2px] ${buttonColorClass}`}
              onClick={handleActivateUser}
              disabled={isActivating}
            >
              <h1 className={isSuccess ? 'text-white' : 'text-[#16BD31] text-[10px]'}>
                {isSuccess ? 'Verified' : 'Verify'}
              </h1>
            </button>
            <button
              className="rounded-lg border bg-[#2455D2] px-[1em] text-sm p-[2px]"
            >
              <h1 className="text-white text-[10px]">Download</h1>
            </button>
            <button
              className={`rounded-lg border bg-blue-500 px-[1em] text-sm p-[2px] ${rejectButtonColorClass}`}
              onClick={handleRejectUser}
              disabled={isDeleting}
            >
              <h1 className={isDeleted ? 'text-white' : 'text-white text-[10px]'}>
                {isDeleted ? 'Deleted' : 'Reject'}
              </h1>
            </button>
          </div>
          {isActivating && <div>Loading activation...</div>}
          {isDeleting && <div>Loading deletion...</div>}
          {activateError && <div>Error during activation: {activateError.message}</div>}
          {deleteError && <div>Error during deletion: {deleteError.message}</div>}
        </div>
      );
    },
  }
    
];

export default function Usertable({ searchQuery,  }) {
  const [customColumn, setCustomColumn] = useState(() => columns);
  const [filter, setFilter] = useState('');
  const [filteredUsersState, setFilteredUsersState] = useState([]);
  const currentPage = useSelector((state) => state.dashboardState.currentPage);
  const currentPagination = useSelector((state) => state.paginationState.currentPagination);


  const { data, error, isLoading } = useGetDashboardQuery({ page: currentPagination });

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
        (item) => item.name.toLowerCase().includes(searchQuery.toLowerCase())
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
    <div style={{}} className="h-auto w-[80vw]  text-[5px] cursor-pointer">
      <div className='h-[65vh]'>
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
          }
          .custom-column-header {
            border-right: none;
          }
        `}          
      </style>
    </div>
  );
}

