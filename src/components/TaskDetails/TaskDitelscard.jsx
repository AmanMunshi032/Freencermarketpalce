import React from 'react';

const TaskDitelscard = ({ditels}) => {
  const {Category,TaskTitle,Description ,Budget}= ditels
    console.log(ditels)
    return (
        <div className='max-w-4xl mx-auto p-8 space-y-4 my-6 md:flex gap-5 bg-emerald-100 rounded-2xl'>
        <div >
          <img className='rounded-md p-6' src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'alt="" />
        </div>
        <div className='mt-10'>
          <h1 className='text-2xl font-semibold'>Title:{TaskTitle}</h1>
          <p>Category:</p>
          <p>Budget:</p>
          <p>Description:</p>
        </div>
        </div>
    );
};

export default TaskDitelscard;