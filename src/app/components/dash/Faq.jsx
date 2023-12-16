// "use client"
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Popover } from '@mui/material';
// import { TableQuestions, selectCategory } from '@/store/slice/faqSlice';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


// const Faq = () => {
//   const selectedCategory = useSelector((state) => state.tableData.currentCategory);
//   const dispatch = useDispatch();

  // const categories = [
  //   { id: TableQuestions.CATEGORY_ONE, name: 'Aout AOT' },
  //   { id: TableQuestions.CATEGORY_TWO, name: 'APP FEATURES' },
  //   { id: TableQuestions.CATEGORY_THREE, name: 'Account and Data' },
  //   { id: TableQuestions.CATEGORY_FOUR, name: 'Payments' },
  //   { id: TableQuestions.CATEGORY_FIVE, name: 'Using AOT' },
  // ];

  // const questionsByCategory = {
  //   [TableQuestions.CATEGORY_ONE]: {
  //     questions: ['Sign Up to deliver goods with AOT', 'Edit Account Info', 'Delete my Account'],
  //     loremIpsum: ['Lorem Ipsum 1', 'Lorem Ipsum 2', 'Lorem Ipsum 3'],
  //   },
  //   [TableQuestions.CATEGORY_TWO]: {
  //     questions: ['Question 4', 'Question 5'],
  //     loremIpsum: ['Lorem Ipsum 4', 'Lorem Ipsum 5'],
  //   },
  //   [TableQuestions.CATEGORY_THREE]: {
  //     questions: ['Question 6', 'Question 7', 'Question 8'],
  //     loremIpsum: ['Lorem Ipsum 6', 'Lorem Ipsum 7', 'Lorem Ipsum 8'],
  //   },
  //   [TableQuestions.CATEGORY_FOUR]: {
  //     questions: ['Question 9', 'Question 10'],
  //     loremIpsum: ['Lorem Ipsum 9', 'Lorem Ipsum 10'],
  //   },
  //   [TableQuestions.CATEGORY_FIVE]: {
  //     questions: ['Question 11', 'Question 12', 'Question 13', 'Question 14'],
  //     loremIpsum: ['Lorem Ipsum 11', 'Lorem Ipsum 12', 'Lorem Ipsum 13', 'Lorem Ipsum 14'],
  //   },
  // };

  // const [selectedQuestion, setSelectedQuestion] = useState(null);

//   const handleCategoryClick = (category) => {
//     dispatch(selectCategory(category));
//     setSelectedQuestion(null);
//   };

//   const handleQuestionClick = (question) => {
//     setSelectedQuestion(question);
//   };

//   useEffect(() => {
//     // Additional logic or side effects can be added here if needed
//     // This effect will run whenever selectedCategory changes
//   }, [selectedCategory]);

//   return (
    // <div>
    //   <div className='grid grid-cols-2 gap-1 w-full'>
    //     <div className='col col-span-1 flex flex-col w-full'>
    //     <div><h2 className='text-black'>Category</h2></div>
    //       <div className='border'>
    //       {categories.map((category) => (
    //         <div>
    //         <div className='border border-2-black w-[100%]'></div>
    //         <div >

    //         <div className='h-[50px] flex justify-between p-3 items-center'>
    //         <h1 className='text-black'>{category.name}</h1>
    //         <KeyboardArrowRightIcon onClick={() => handleCategoryClick(category.id)}/>

    //         </div>
    //         </div>
    //         </div>
    //       ))}
    //       </div>
    //     </div>
    //     <div className='col col-span-1 flex flex-col'>
    //     <div><h2 className='text-black'>Questions</h2></div>

    //       {categories.map((category) => (
    //         <div>
    //           <div>
    //             {selectedCategory === category.id &&
    //               questionsByCategory[category.id].questions.map((question, index) => (
    //                 <div>
    //                 <div className='border border-2-black w-[100%]'></div>
    //                 <div >
    //                 <div className='h-[50px] w-[80%] flex text-left p-3 items-center'>
    //                 <h1 className='text-black'>{question}</h1>
    //                 <KeyboardArrowRightIcon key={index} onClick={() => handleQuestionClick(question)}/>


    //                 </div>
    //                 </div>
    //                 </div>
    //               ))}
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   <Popover
    //     open={!!selectedQuestion}
    //     anchorEl={selectedQuestion}
    //     onClose={() => setSelectedQuestion(null)}
    //     anchorOrigin={{
    //       vertical: 'bottom',
    //       horizontal: 'center',
    //     }}
    //     transformOrigin={{
    //       vertical: 'top',
    //       horizontal: 'center',
    //     }}
    //   >
    //     <div style={{ padding: '1rem' }}>
    //       <h2>{selectedQuestion}</h2>
    //       <p>{questionsByCategory[selectedCategory].loremIpsum[selectedQuestion]}</p>
    //     </div>
    //   </Popover>
    // </div>
//   );
// };

// export default Faq;

// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Popover } from '@mui/material';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import { useGetFAQsQuery, selectCategory } from '../../api/apiSlice'; // Import the new query


// const Faq = () => {
//   const selectedCategory = useSelector((state) => state.tableData.currentCategory);
//   const dispatch = useDispatch();

//   const categories = [
//     { id: 'about', name: 'About AOT' },
//     { id: 'app', name: 'App Features' },
//     { id: 'account', name: 'Account and Data' },
//     { id: 'payment', name: 'Payments' },
//     { id: 'usage', name: 'Using AOT' },
//   ];

//   const [selectedQuestion, setSelectedQuestion] = useState(null);

//   const handleCategoryClick = (category) => {
//     dispatch(selectCategory(category));
//     setSelectedQuestion(null);
//   };

//   const handleQuestionClick = (question) => {
//     setSelectedQuestion(question);
//   };

//   const { data: faqs } = useGetFAQsQuery(); // Fetch FAQ data using the API query

//   return (
//     <div>
//       <div className='grid grid-cols-2 gap-1 w-full'>
//         <div className='col col-span-1 flex flex-col w-full'>
//           <div><h2 className='text-black'>Category</h2></div>
//           <div className='border'>
//             {categories.map((category) => (
//               <div key={category.id}>
//                 <div className='border border-2-black w-[100%]'></div>
//                 <div >
//                   <div className='h-[50px] flex justify-between p-3 items-center'>
//                     <h1 className='text-black'>{category.name}</h1>
//                     <KeyboardArrowRightIcon onClick={() => handleCategoryClick(category.id)}/>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className='col col-span-1 flex flex-col'>
//           <div><h2 className='text-black'>Questions</h2></div>
//           {categories.map((category) => (
//             <div key={category.id}>
//               <div>
//                 {selectedCategory === category.id && faqs?.data
//                   .filter((faq) => faq.category === category.id)
//                   .map((faq) => (
//                     <div key={faq.id}>
//                       <div className='border border-2-black w-[100%]'></div>
//                       <div>
//                         <div className='h-[50px] w-[80%] flex text-left p-3 items-center'>
//                           <h1 className='text-black'>{faq.question}</h1>
//                           <KeyboardArrowRightIcon onClick={() => handleQuestionClick(faq.id)}/>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Popover
//         open={!!selectedQuestion}
//         anchorEl={selectedQuestion}
//         onClose={() => setSelectedQuestion(null)}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'center',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'center',
//         }}
//       >
//         <div style={{ padding: '1rem' }}>
//           {selectedQuestion && faqs?.data
//             .find((faq) => faq.id === selectedQuestion)
//             ?.answer}
//         </div>
//       </Popover>
//     </div>
//   );
// };

// export default Faq;

"use client"
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useGetFAQsQuery } from '../../api/apiSlice';
import { TableQuestions, selectCategory } from '@/store/slice/faqSlice';
import lol from "../../../assets/discount.png"
import ticket from "../../../assets/ticket.png"
import calender from "../../../assets/calender.png"
import Image from 'next/image';
import Faqmodal from "./Faqmodal"


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

  const { data: faqs } = useGetFAQsQuery();

  console.log("faq data is", faqs)

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


