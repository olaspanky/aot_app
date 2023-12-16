"use client"
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Popover } from '@mui/material';
import { TableQuestions, selectCategory } from '@/store/slice/faqSlice';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const Faq = () => {
  const selectedCategory = useSelector((state) => state.tableData.currentCategory);
  const dispatch = useDispatch();

  const categories = [
    { id: TableQuestions.CATEGORY_ONE, name: 'Aout AOT' },
    { id: TableQuestions.CATEGORY_TWO, name: 'APP FEATURES' },
    { id: TableQuestions.CATEGORY_THREE, name: 'Account and Data' },
    { id: TableQuestions.CATEGORY_FOUR, name: 'Payments' },
    { id: TableQuestions.CATEGORY_FIVE, name: 'Using AOT' },
  ];

  const questionsByCategory = {
    [TableQuestions.CATEGORY_ONE]: {
      questions: ['Sign Up to deliver goods with AOT', 'Edit Account Info', 'Delete my Account'],
      loremIpsum: ['Lorem Ipsum 1', 'Lorem Ipsum 2', 'Lorem Ipsum 3'],
    },
    [TableQuestions.CATEGORY_TWO]: {
      questions: ['Question 4', 'Question 5'],
      loremIpsum: ['Lorem Ipsum 4', 'Lorem Ipsum 5'],
    },
    [TableQuestions.CATEGORY_THREE]: {
      questions: ['Question 6', 'Question 7', 'Question 8'],
      loremIpsum: ['Lorem Ipsum 6', 'Lorem Ipsum 7', 'Lorem Ipsum 8'],
    },
    [TableQuestions.CATEGORY_FOUR]: {
      questions: ['Question 9', 'Question 10'],
      loremIpsum: ['Lorem Ipsum 9', 'Lorem Ipsum 10'],
    },
    [TableQuestions.CATEGORY_FIVE]: {
      questions: ['Question 11', 'Question 12', 'Question 13', 'Question 14'],
      loremIpsum: ['Lorem Ipsum 11', 'Lorem Ipsum 12', 'Lorem Ipsum 13', 'Lorem Ipsum 14'],
    },
  };

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleCategoryClick = (category) => {
    dispatch(selectCategory(category));
    setSelectedQuestion(null);
  };

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
  };

  useEffect(() => {
    // Additional logic or side effects can be added here if needed
    // This effect will run whenever selectedCategory changes
  }, [selectedCategory]);

  return (
    <div>
      <div className='grid grid-cols-12 gap-1 w-full'>
        <div className='col col-span-5 flex flex-col w-full'>
          <div className='border'>
          {categories.map((category) => (
            <div>
            <div className='border border-2-black w-[100%]'></div>
            <div >

            <div className='h-[50px] flex justify-between p-3 items-center'>
            <h1 className='text-black'>{category.name}</h1>
            <KeyboardArrowRightIcon onClick={() => handleCategoryClick(category.id)}/>

            </div>
            </div>
            </div>
          ))}
          </div>
        </div>
        <div className='col col-span-7 flex flex-col'>

          {categories.map((category) => (
            <div>
              <div>
                {selectedCategory === category.id &&
                  questionsByCategory[category.id].questions.map((question, index) => (
                    <div>
                    <div className='border border-2-black w-[100%]'></div>
                    <div >
                    <div className='h-[50px] w-[100%] flex justify-between inline block text-left p-3 items-center'>
                    <h1 className='text-black'>{question}</h1>
                    <KeyboardArrowDownIcon key={index} onClick={() => handleQuestionClick(question)}/>


                    </div>
                    </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Popover
        open={!!selectedQuestion}
        anchorEl={selectedQuestion}
        onClose={() => setSelectedQuestion(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div style={{ padding: '1rem' }}>
          <h2>{selectedQuestion}</h2>
          <p>{questionsByCategory[selectedCategory].loremIpsum[selectedQuestion]}</p>
        </div>
      </Popover>
    </div>
  );
};

export default Faq;
