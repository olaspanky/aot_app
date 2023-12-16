"use client"
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import lol from "../../../assets/discount.png"
import ticket from "../../../assets/ticket.png"
import calender from "../../../assets/calender.png"
import Image from 'next/image';
import Faqmodal from "./Faqmodal"
import { useGetSupportDataQuery } from '../../api/apiSlice';
import { selectCategory } from '@/store/slice/faqSlice';

const Faq = () => {
  const selectedCategory = useSelector((state) => state.tableData.currentCategory);
  const dispatch = useDispatch();

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleCategoryClick = (category) => {
    dispatch(selectCategory(category));
    setSelectedQuestion(null);
  };

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  };

  const { data: faqs } = useGetSupportDataQuery();

  console.log("faq is", faqs)

  // Generate the categories array dynamically from the API data
  const categories = Array.from(new Set(faqs?.data.map((faq) => faq.category))).map((category) => ({
    id: category,
    name: category,
  }));

  const questionsByCategory = {
    // Your questionsByCategory data goes here
  };

  return (
    <div>
      <div className='grid grid-cols-2 container gap-1 w-full '>
        <div className='col col-span-1 flex flex-col'>
          <div><h2 className='text-black'>Category</h2></div>
          <div className='border'>
            {categories.map((category) => (
              <div key={category.id}>
                <div className='border border-2-black w-[100%]'></div>
                <div>
                  <div className='h-[50px] flex justify-between p-3 items-center'>
                    <h1 className='text-black'>{category.name}</h1>
                    <KeyboardArrowRightIcon onClick={() => handleCategoryClick(category.id)}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='col col-span-1 flex flex-col'>
  <div><h2 className='text-black'>Questions</h2></div>
  {categories.map((category) => (
    <div key={category.id}>
      {selectedCategory === category.id &&
        faqs?.data
          .filter((faq) => faq.category === category.id)
          .map((faq) => (
            <div key={faq.id}>
              <div className='border border-2-black w-[100%]'></div>
              <div>
                <div className='h-[50px] flex justify-between text-left p-3 items-center'>
                  <h1 className='text-black'>{faq.question}</h1>
                  <KeyboardArrowRightIcon
                    onClick={() => handleQuestionClick(faq.question)}
                  />
                </div>
              </div>
            </div>
          ))}
    </div>
  ))}
</div>

      </div>

      <Modal
        open={!!selectedQuestion}
        onClose={() => setSelectedQuestion(null)}
        aria-labelledby='question-modal'
        aria-describedby='question-answer'
      >
        <div style={{ padding: '1rem' }}>
          {/* Find the corresponding FAQ object in the faqs array */}
          {faqs?.data.map((faq) => {
            if (faq.question === selectedQuestion) {
              return (
                <div key={faq.id}>
                 
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
        <div className="grid grid-cols-2 gap-9 m-5 pt-9">
        <div className="col-span-1 flex flex-col h-full">
          {/* Promo Code */}
          <div className="flex flex-col w-full mb-3 flex-grow">
            <label>
              <h3 className="text-xs font-extralight">Promo code</h3>
            </label>
            <div className="p-3 flex gap-2 border border-[#CDCDCD] rounded-lg items-center">
              <Image src={ticket} alt="ticket" />
              <h2>{faq.category}</h2>
            </div>
          </div>
          {/* Expiration Date */}
          
        </div>
        <div className="col-span-1 flex flex-col h-full">
          {/* Discount */}
          <div className="flex flex-col w-full mb-3 flex-grow">
            <label>
              <h3 className="text-xs font-extralight">Discount</h3>
            </label>
            <div className="p-3 flex gap-2 border border-[#CDCDCD] rounded-lg items-center">
            <Image src={lol} alt="" className="w-[20px] h-[20px]" />
            <h3>{faq.question}</h3>
            </div>
          </div>
          {/* Expiration Time */}
          
        </div>
      </div>

      <div className="m-5 p-3 flex gap-2 border-[#CDCDCD] w-[60%] border-2 rounded-md">
        <Image src={calender} alt="" className="w-[20px] h-[20px]" />
        <p>{faq.answer}</p>

      </div>

      <div className="flex flex-col gap-3 justify-center items-center py-9">
        <button
          type="submit"
          className="bg-[#FF7D00] inline-block rounded-lg py-2 w-[30%] border-2 border-[#FF7D00] text-white"
        >
          <h2>Add Faq</h2>
        </button>
      </div>
        </div>
                </div>
                
              );
            }
            return null;
          })}
        </div>
      </Modal>

      <div className='w-full flex justify-center items-center my-9 mt-9'>
      <Faqmodal/>
      </div>

    </div>
  );
};

export default Faq;