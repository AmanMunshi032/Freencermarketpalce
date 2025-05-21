import React from 'react';
import Slidersection from './Slidersection';
import FeaturedTasksSection from './FeaturedTasksSection';
import { useLoaderData } from 'react-router';
const Home = () => {
   const grapesdata = useLoaderData()
  // console.log(grapesdata)
    return (
        <div>
          <Slidersection></Slidersection>
          <h1 className='text-5xl text-center m-4 font-semibold'>Featured Tasks</h1>
        <div className=' md:w-7xl md:mx-auto grid md:grid-cols-3 grid-cols-2 p-6  gap-4'>
            {
            grapesdata.map(grape=><FeaturedTasksSection key={grape._id} grape={grape}></FeaturedTasksSection>)
          }
        </div>
        
         
        </div>
    );
};

export default Home;