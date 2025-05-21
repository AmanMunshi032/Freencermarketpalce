import React from 'react';
import { Link, NavLink } from 'react-router';
import { useLoaderData } from 'react-router';

const BrowseTask = () => {
    const data =useLoaderData()

    console.log(data)
    return (
        <div className=' md:w-7xl md:mx-auto grid md:grid-cols-3 grid-cols-2 p-6  gap-4'>
          {
            data.map(grape=> <div className="  card bg-base-100  border-2 shadow-sm ">
  <div className="card-body  text-center">
  
     <h2 className="text-xl font-bold">{ grape.TaskTitle}</h2>
       <p className=''>{ grape.Category}</p>
      <p>{ grape.Deadline}</p>
    <p className=''>{grape.Description}</p>
    <NavLink to ='/TaskDetail'>
     <button className='px-4 py-2 bg-cyan-900 rounded-md text-white font-semibold'>See Details</button>
    </NavLink>
   
  </div>
</div>)
          }
        </div>
        
    );
};

export default BrowseTask;