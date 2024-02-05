"use client";

import * as React from "react";
import guyy from "../../../assets/guy.png";
import protect from "../../../assets/protect.png";
import sms from "../../../assets/sms.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useGetTrackingOrdersQuery } from "@/app/api/apiSlice";
import group from "../../../assets/group.png"
import email from '../../../assets/wallet.png'


export default function Table({ duration }) {
  const [currentPage, setCurrentPage] = useState("tracking");
  const handleGoodsPickedClick = () => {
    setCurrentPage("goodsPicked");
  };

  const handleBackButtonClick = () => {
    setCurrentPage("tracking");
  };

  const [remainingMinutes, setRemainingMinutes] = useState(0);

  const { data, isLoading, isError } = useGetTrackingOrdersQuery();
  console.log("data is:", data?.data[0]);
  console.log("Cost:", data?.data[0].cost);
  console.log("Date:", data?.data[0].date);
  console.log("From:", data?.data[0].from);
  console.log("ID:", data?.data[0].id);
  console.log("Item:", data?.data[0].item);
  console.log("To:", data?.data[0].to);
  console.log("Vehicle:", data?.data[0].vehicle);

  useEffect(() => {
    const parsedDuration = parseDuration(duration);
    setRemainingMinutes(parsedDuration);

    const interval = setInterval(() => {
      setRemainingMinutes((prevMinutes) => {
        if (prevMinutes > 0) {
          return prevMinutes - 1;
        }
        clearInterval(interval);
        return 0;
      });
    }, 60000);

    return () => clearInterval(interval);
  }, [duration]);

  const parseDuration = (durationString) => {
    const segments = durationString.split(" ");

    let totalMinutes = 0;
    for (let i = 0; i < segments.length; i++) {
      if (segments[i] === "hour" || segments[i] === "hours") {
        totalMinutes += parseInt(segments[i - 1]) * 60;
      } else if (segments[i] === "min" || segments[i] === "mins") {
        totalMinutes += parseInt(segments[i - 1]);
      }
    }

    return totalMinutes;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (!data) {
    return <div>No order to track</div>;
  }

  return (
    <div className="h-auto w-[100%] text-[16px]">
     {currentPage === "tracking" ? (
        <div>
          <div className="flex-grow flex flex-col gap-9">
            <div>
              <h1 className="text-[24px] font-bold">
                Arriving in {remainingMinutes}{" "}
                {remainingMinutes === 1 ? "Minute" : "Minutes"}{" "}
              </h1>
            </div>

            <div>
              <h1 className="text-[16px]">
                {data?.data[0].vehicle} <span className="font-bold">BEN193US</span>
              </h1>
            </div>

            {/*icons */}
            <div className="grid space-between grid-cols-12">
              <div className="col-span-4 w-[60px] h-[60px] rounded-full bg-[#D4D4D4] grid place-content-center">
                <Image src={guyy} alt="" width="" height="" />
              </div>
              <div className="col-span-4 w-[60px] h-[60px] rounded-full bg-[#D4D4D4] grid place-content-center">
                <Image src={protect} alt="" width="" height="" />
              </div>
              <div className="col-span-4 w-[60px] h-[60px] rounded-full bg-[#D4D4D4] grid place-content-center">
                <Image src={sms} alt="" width="" height="" />
              </div>
            </div>

            <div className="border border-[#d4d4d4]"></div>

            <div className="flex flex-col gap-3" onClick={handleGoodsPickedClick}>
              <h1 className="text-[24px] font-bold">Goods Picked</h1>
              <h1 className="text-[16px]">{data?.data[0].item}</h1>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-[24px] font-bold">Recipient</h1>
              <h1 className="text-[16px]">{data?.data[0].to} </h1>
            </div>
          </div>

          <div className="footer w-full mt-20  grid mb-0 place-content-center">
            <button className="bg-[#FF2C2C]  grid grid-cols-12 items-center  bottom-2 m-3 rounded-lg border  py-3 px-20 text-[16px] text-center">
              <h1 className="col-span-11 text-white font-bold ">
                Cancel Pickup
              </h1>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-grow flex flex-col gap-3">
    
        <div className='flex flex-col gap-5'>
            <div>
            <h1 className='text-[24px] font-bold'>En route to destination</h1>
        </div>
        
        <div>
        <h1 className='text-[16px]'>{data?.data[0].vehicle} <span className='font-bold'>BEN193US</span></h1>
        </div>
        
        <div className='border border-1-black w-full bg-black my-2'></div>
        
        </div>
        
        {/*icons */}
        <div className='flex  items-center justify-between my-1 '>
            <div className='col-span-6 w-[60px] h-[60px] rounded-full bg-[#D4D4D4] grid place-content-center'><Image src={guyy} alt="" width="" height=""/></div>
            <div className='col-span-6 w-[60px] h-[60px] rounded-full bg-[#D4D4D4] grid place-content-center'><Image src={sms} alt="" width="" height=""/></div>
            
        </div>
        
        <div className='border border-1-black w-full bg-black my-3'></div>
        
        
        <div>
            <h1 className='text-[24px] font-bold'>Route</h1>
        </div>
        
            {/* location */}
            <div className='grid grid-cols-12 w-full my-5 '>
            <div className='col-span-5 flex flex-col justify-between'>
            <div><h2 className='text-sm font-normal '>Pickup Location</h2></div>
            <div><h2 className='text-sm font-normal'>Delivery Location</h2></div>
            </div>
            <div className='col-span-1 h-full w-full grid place-content-center'><Image src={group} width="" height=""/></div>
            {/* street names */}
            <div className='col-span-5 flex flex-col justify-between'>
            <div><h2 className='text-sm font-normal '>{data?.data[0].from}</h2></div>
            <div><h2 className='text-sm font-normal'>{data?.data[0].to}</h2></div>
            </div>
            </div>
            {/* Goods delivered */}
              <div className='flex flex-col my-2' onClick={handleBackButtonClick}>
              <div className=''><h2 className='text-[16px] font-bold'>Goods Picked</h2></div>
              <div className='flex justify-between my-2'>
              
              <div><h2>{data?.data[0].item}</h2></div>
              
              </div>
              </div>
        
              <div className='border border-1-black w-full bg-black my-2'></div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 '>
                <Image src={email} alt="" className="w-[20px] h-[20px]" />          
                <p>wallet</p>
                </div>
                <div>{ data?.data[0].cost}</div>
            </div>
        
            <div className='border border-black w-full bg-black my-5'></div>
        
        
        
        
        
            </div>      )}
    </div>
  );
}
