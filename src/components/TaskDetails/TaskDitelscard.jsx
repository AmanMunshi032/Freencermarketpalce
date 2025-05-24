import React, { useState } from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import { FaHeart } from "react-icons/fa";
const TaskDitelscard = ({ditels}) => {
  const [value, setValue] = useState(0);
 const handleClick = () => {
    setValue( value + 1);
    toast('your bids Count successfully.!')
  };
 
  

  const {Category,TaskTitle,Description ,Buget,photo} = ditels?.[0] || {}
    //  console.log(ditels)
    return (
       <div >
   <div className='max-w-4xl mx-auto p-8 space-y-4 md:flex gap-5 bg-emerald-100 rounded-2xl'>
         
        <div >
          <img className=' md:w-4xl w-full rounded-2xl shadow-md' src={photo} alt="" />
        </div>
        <div className='mt-4  space-y-5 w-full '>
          <h1 className='text-2xl font-semibold'>Title:<span className='text-neutral-600 font-normal'>{TaskTitle}</span></h1>
          <p className='text-xl font-bold'>Category: <span className='text-fuchsia-600 font-normal'>{Category}</span></p>
          <p className='text-xl font-bold'>Buget: <span className='text-amber-500 font-normal'>{Buget}</span></p>
          <p className='text-xl font-bold'>Description: <span className='font-normal text-blue-400'>{Description}</span></p>
<h1  className='text-xl'>  You bid for <span className='font-bold text-fuchsia-500'>{value} </span>opportunities</h1>
<button onClick={handleClick} className='text-red-600 btn'> <span className='flex gap-2'>Bids <FaHeart  size={20}/></span> 
        </button>
         <ToastContainer />
        </div>
      
        </div>
       </div>
     
    );
};

export default TaskDitelscard;