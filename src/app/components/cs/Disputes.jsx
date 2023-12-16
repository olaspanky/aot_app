import React from 'react';
import { message } from '../../dash/data/disputedata';

const Disputes = ({ onMessageClick }) => {
  if (!message || !message.length) {
    return <p>No messages found.</p>;
  }

  const truncateMessage = (msg, maxLength) => {
    if (msg.length <= maxLength) {
      return msg;
    }
    return `${msg.slice(0, maxLength)}...`;
  };

  return (
    <div>
      {message.map((item, index) => (
        <div key={index}>
          {item.content.map((msg, msgIndex) => (
            <div
              key={msgIndex}
              className='grid grid-cols-12 gap-3'
              onClick={() => onMessageClick(msg)} // Move the onClick event here
            >
              <div className='col-span-2 p-5 items-center justify-center'>
                {/* profile img */}
                <div className='rounded-full w-[60px] h-[60px] grid place-content-center bg-[#F39872]'>
                  <h1 className='text-[32px]'>ji</h1>
                </div>
              </div>
              {/* text message */}
              <div className='col-span-8 flex flex-col justify-center p-2 pl-4'>
                <h1 className='text-[16px] font-bold text-[#040404]'>{msg.sender}</h1>
                <p className='overflow-hidden inline-block w-full text-[#040404]'>
                  {truncateMessage(msg.message, 50)} {/* Change 50 to the desired length */}
                </p>
              </div>
              {/* notification */}
              <div className='col-span-2 gap-2 flex flex-col justify-center items-center'>
                <h1 className='text-[12px] font-light text-[#040404]'>just now</h1>
                <div className='rounded-full w-[20px] h-[20px] grid self-center place-content-center bg-[#F39872]'>
                  <h1 className='text-[12px]'>5</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Disputes;
