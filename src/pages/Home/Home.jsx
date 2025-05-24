import React from 'react';
import Slidersection from './Slidersection';
import FeaturedTasksSection from './FeaturedTasksSection';
import { useLoaderData } from 'react-router';
import Jobcatagory from '../../components/Jobcatagorys/Jobcatagory';
import Hightreting from '../../components/Hightreting/Hightreting';
import { Darktheme } from '../../components/Darktheme/Darkthem';

const Home = () => {
   const grapesdata = useLoaderData()

  // console.log(grapesdata)
    return (
       
 <div className='bg-white dark:bg-gray-800 '>
          <Slidersection></Slidersection>
          <h1 className='text-5xl text-center m-4 font-semibold text-cyan-600'>Featured Tasks</h1>
        <div className=' md:w-7xl md:mx-auto grid md:grid-cols-3 grid-cols-1 p-6  gap-4'>
            {
            grapesdata.map(grape=><FeaturedTasksSection key={grape._id} grape={grape}></FeaturedTasksSection>)
          }
        </div>
          <div>
            <h1 className='text-center text-4xl my-4 font-bold text-cyan-600'>Popular Job Categories</h1>
            <Jobcatagory></Jobcatagory>
          </div>
          <div>
             <h1 className='text-center text-4xl my-4 font-bold text-cyan-600'>Highest Rated Freelancers</h1>
             <Hightreting></Hightreting>
          </div>
           
        </div>
      
       
    );
};

export default Home;