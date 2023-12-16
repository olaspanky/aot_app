      "use client"
import React from 'react'
import Layout from '../../shared/Layout'
import LineChart from '../../components/dash/Linechart'
import LineChart2 from '../../components/dash/Linechart2'
import ProtectedRoute from "../../components/Protected"
import { useSelector } from 'react-redux'; 

const page = () => {
  const user = useSelector((state) => state.user);

  
  return (
    <ProtectedRoute user={user}>
    <Layout>
    <div className=' bg-white w-[100%]  text-black h-auto'>
    <div className=' bg-white w-[auto] py-5 sticky top-0 flex mt-10 mr-5'>    
    <div className='mr-auto'>
    <h1 className='text-black font-semibold text-2xl py-2 '>Dashboard</h1>
    </div>

    <div className='ml-auto'>
    <ul className="flex text-sm font-light text-[16px] gap-3">
    <li className=" ">
      <button className="text-gray-500 hover:underline"  >Today</button>
    </li>
    <li className="">
      <button className="text-gray-500 hover:underline"  >Last 7d</button>
    </li>
    <li className="">
      <button className="text-gray-500 hover:underline"  >Last 30d</button>
    </li>
    <li className="">
      <button className="text-gray-400 hover:underline" >custom date</button>
    </li>
  </ul>
    </div>
    </div>


    <div className='grid grid-cols-9 gap-3 mt-5'>

    <div className='col-span-5 h-[425px] rounded-lg p-5 bg-white w-full shadow-xl border-2-black'>
    <h1 className='text-black font-bold text-lg '>User Overview</h1>
    <div className='w-[80] border-b-2'></div>
    <LineChart/>
    </div>

    <div className='col-span-4 h-full'>
      <div className=' rounded-lg bg-white w-full p-5 shadow-xl border-2-black'>
      <h2 className='text-lg font-bold '>Ticket Summary</h2>
      <div className='w-[80] border-b-2'></div>
      <table className="w-full table-fixed text-[17px]">
      <thead>
        <tr>
          <th className="w-1/2 px-4 py-2"></th>
          <th className="w-1/2 px-4 py-2"></th>
        </tr>
      </thead>
      <tbody>
        <tr className='border-b-2'>
          <td className="w-1/2 px-4 py-2">Resolved</td>
          <td className="w-1/2 px-4 py-2 text-right">2230</td>
        </tr>
        <tr className='border-b-2'>
          <td className="w-1/2 px-4 py-2">unresolved</td>
          <td className="w-1/2 px-4 py-2 text-right">50</td>
        </tr>
      </tbody>
    </table>
    <div className='text-right mt-5 text-sm text-[#FFD4AA]'>    <a href='/'>View all</a>    </div>

      </div>


      <div className=' rounded-lg bg-white w-full p-5 shadow-xl border-2-black mt-3'>
      <h2 className='text-lg font-bold'>Account Overview</h2>
      <div className='w-[80] border-b-2'></div>
      <table className="w-full table-fixed text-[17px] ">
      <thead>
        <tr>
          <th className="w-1/2 px-4 py-2"></th>
          <th className="w-1/2 px-4 py-2"></th>
        </tr>
      </thead>
      <tbody>
        <tr className='border-b-2'>
          <td className="w-1/2 px-4 py-2">Active</td>
          <td className="w-1/2 px-4 py-2 text-right">2290</td>
        </tr>
        <tr >
          <td className="w-1/2 px-4 py-2">Suspended</td>
          <td className="w-1/2 px-4 py-2 text-right">50</td>
        </tr>
      </tbody>
    </table>

      </div>


      
    </div>

    </div>


    <div className='grid grid-cols-12 mt-5'>
    <div className='col-span-6 h-[425px] p-5 rounded-lg bg-white w-full  shadow-xl border-2-black'>
    <h1 className='text-black font-bold text-[20px] '>Total Amount Paid(#)</h1>
    <div className='w-[80] border-b-2'></div>
    <LineChart2/>
    </div>

    </div>


    </div>
    
    </Layout>
    </ProtectedRoute>
  )
}

export default page
