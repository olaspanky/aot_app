
// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import { useGetDisputesQuery } from '@/app/api/apiSlice';
// import { useSelector } from 'react-redux';
// import { DisputePages } from '@/store/slice/disputeSlice';
// import ModalComponent from './modal2'
// import { useState } from 'react'
// import eye from "@/assets/eye.png"
// import Image from 'next/image';



// const columns = [
//   { field: 'id', headerName: 'User ID', flex: 1 },
//   { field: 'date', headerName: 'Date',type:"string", flex: 1 },
//   { field: 'name', headerName: 'Name', flex: 1 },
//   {
//     field: 'email',
//     headerName: 'Email',
//     type: 'email',
//     wflex: 1
//   },
//   {
//     field: 'phone',
//     headerName: 'Phone No.',
//     type:"number",
//     flex: 1
    
//   },
//   {
//     field: 'status',
//     headerName: 'status',
//     type:"string",
//     flex: 1
    
//   },
//   {
//     field: 'access',
//     headerName: 'Account Type',
//     type:"string",
//     flex: 1,
//     renderCell: (params) => {
//       // Change the color based on a certain condition
//       const access = params.value;
//       const color = "#FF7D00"

//       return (
//         <span style={{ color }}>{access}</span>
//       );
//     },
  
    
    
//   },
//   {
    
//     field: 'actions',
//     headerName: 'Actions',
//     flex: 1,
//     renderCell: (params) => {

//       const [openModal, setOpenModal] = useState(false);
//       const [selectedRowData, setSelectedRowData] = useState(null);
    
//       // ...
    
//       const handleRowClick = (params) => {
//         setSelectedRowData(params.row);
//         setOpenModal(true);
//       };
    
//       const handleCloseModal = () => {
//         setOpenModal(false);
//       };

    
        
//       return (
        
//         <div className="">
//         <div className='flex gap-3'>
//         <button className='rounded-lg flex items-center gap-[8px] border border-[#2455D2] text-sm p-1' onClick={() => handleRowClick(params)} data-toggle="modal" data-target="#myModal">
//           <h1 className='text-[#2455D2]'>View</h1>
//           <Image src={eye} width="" height="" alt='image'/>
//         </button>
//         </div>
        
      
          
//           {openModal && selectedRowData?.id === params.row.id && (
//             <ModalComponent rowData={selectedRowData} open={openModal} handleClose={handleCloseModal} />
//           )}
          
       

//         </div>
//       );
//     },
//   },

// ];





// export default function Dispute() {


//   const [customColumn, setCustomColumn] = React.useState(columns);
//   const [filter, setFilter] = React.useState("");
//   const currentPage = useSelector((state) => state.disputeState.currentPage);

//   // Fetch data from the 'GET api/v1/admin/disputes' endpoint
//   const { data: disputes } = useGetDisputesQuery();

//   React.useEffect(() => {
//     if (currentPage === DisputePages.RESOLVED) setFilter("Resolved");
//     if (currentPage === DisputePages.UNRESOLVED) setFilter("Unresolved");
//     if (currentPage === DisputePages.ALL_DISPUTES) setFilter("");
//   }, [currentPage]);

//   console.log('Disputes data:', disputes);


//   return (
//     <div style={{}} className="h-auto w-[80vw]  text-[5px] cursor-pointer">
//       <div className="h-[100vh]">
//         <DataGrid
//           className="text-md h-full"
//           rows={!!filter ? disputes.filter((item) => item.status === filter) : disputes}
//           columns={customColumn}
//           initialState={{
//             pagination: {
//               paginationModel: { page: 0, pageSize: 7 },
//             },
//           }}
//           pageSizeOptions={[20, 50]}
//         />
//       </div>
//     </div>
//   );
// }

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { DisputePages, setCurrentPage } from '@/store/slice/disputeSlice';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ModalComponent from './DisputesModal';
import { useGetDisputesQuery, } from '@/app/api/apiSlice';
import {useGetRiderDetailsQuery,useLazyGetUserDetailsQuery} from '../../api/apiSlice';
import {setCurrentPagination} from "@/store/slice/paginationSlice" 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircularProgress from '@mui/material/CircularProgress';
import eye from "@/assets/eye.png"
import Image from 'next/image';
import { useLazyGetAdminDisputeByIdQuery } from '@/app/api/apiSlice';




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
  { field: 'id', headerName: 'User ID', flex: 1 },
  { field: 'opened_date', headerName: 'Date',type:"string", flex: 1 },
  { field: 'customer_name', headerName: 'Name', flex: 1 },
  {
    field: 'customer_email',
    headerName: 'Email',
    type: 'email',
    flex: 1
  },
  {
    field: 'customer_phone',
    headerName: 'Phone No.',
    type:"number",
    flex: 1
    
  },
  {
    field: 'status',
    headerName: 'status',
    type:"string",
    flex: 1
    
  },
 
  {
    
        field: 'actions',
        headerName: 'Actions',
        flex: 1,
        renderCell: (params) => {
    
          const [openModal, setOpenModal] = useState(false);
          const [selectedRowData, setSelectedRowData] = useState(null);
          const [trigger] = useLazyGetAdminDisputeByIdQuery(); // Use the query hook
          const [riderDetails, setRiderDetails] = useState(null);

          
          


          console.log("disputeparams", params.row.dispute_id)
          console.log("details", riderDetails)
        
          // ...
        
          // const handleRowClick = (params) => {
          //   setSelectedRowData(params.row.dispute_id);
          //   setOpenModal(true);
          // };
        
          // const handleCloseModal = () => {
          //   setOpenModal(false);
          // };

         
          const [disputeData, setDisputeData] = useState(null); // To store fetched dispute details
        
          // Make use of the useGetAdminDisputeByIdQuery hook from your API setup
        
          // Update the disputeData state when new data is fetched
        
        
          const handleRowClick = async (params) => {
            try {
              console.log("row data is", params);
              const dispute_id = params.row.dispute_id; // Use user_id from rowData
              console.log('Fetching dispute for dispute ID:', dispute_id);
              setSelectedRowData(params);
        
              // Fetch rider details using the user_id
              const response = await trigger(dispute_id);
              if (response.data) {
                setRiderDetails(response.data);
                setOpenModal(true);
              } else {
                // Handle error here
              }
            } catch (error) {
              console.error('Error fetching dispute details:', error);
              // Handle error
            }
          };
        
          const handleCloseModal = () => {
            setOpenModal(false);
          };
    
        
            
          return (
            
            <div className="">
            <div className='flex gap-3'>
            <button className='rounded-lg flex items-center gap-[8px] border border-[#2455D2] text-sm p-1' onClick={() => handleRowClick(params)} data-toggle="modal" data-target="#myModal">
              <h1 className='text-[#2455D2]'>View</h1>
              <Image src={eye} width="" height="" alt='image'/>
            </button>
            </div>
            
          
              
              {openModal && selectedRowData?.id === params.row.id && (
                <ModalComponent           
                riderDetails={riderDetails}
                rowData={selectedRowData} 
                open={openModal} 
                handleClose={handleCloseModal} />
              )}
              
           
    
            </div>
          );
        },
      },
    
];

export default function Usertable({ searchQuery,  }) {
  const [customColumn, setCustomColumn] = useState(() => columns);
  const [filter, setFilter] = useState('');
  const [filteredUsersState, setFilteredUsersState] = useState([]);
  const currentPage = useSelector((state) => state.disputeState.currentPage);
  const currentPagination = useSelector((state) => state.paginationState.currentPagination);


  const { data, error, isLoading } = useGetDisputesQuery({ page: currentPagination });

  console.log("data:", data)

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
    console.log('Data from useGetDisputesQuery:', data);
    console.log('Error from useGetDisputesQuery:', error);
    if (data) {
    let filteredUsersData = [...usersWithIds];
    if (currentPage === DisputePages.RESOLVED) {
      setCustomColumn(columns);
      filteredUsersData = filteredUsersData.filter((item) => item.status === 'open');
      setFilter('individual');
    } else {
      setCustomColumn(columns);
      setFilter('');
    }
    if (currentPage === DisputePages.UNRESOLVED) {
      filteredUsersData = filteredUsersData.filter((item) => item.status === 'closed');
      setFilter('rider');
    }
    if (!!searchQuery) {
      filteredUsersData = filteredUsersData.filter(
        (item) => item.customer_name.toLowerCase().includes(searchQuery.toLowerCase())
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

if (error && error.status === 404) {
  return (
    <div className="flex justify-center items-center h-[65vh]">
      <p>Data not found. Please check your query parameters.</p>
    </div>
  );
}


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

