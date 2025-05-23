import React, { useEffect, useState,  } from 'react';
import Hightretingcard from './Hightretingcard';

const Hightreting = () => {
     const [hight, sethight]=useState([])
    useEffect(()=>{
       fetch('/hight.json') 
       .then(res=>res.json())
       .then(data=>{
       sethight(data)
       })
        .catch(err => console.error(err));
    },[])
    return (
        <div className='md:w-7xl md:mx-auto grid md:grid-cols-3 grid-cols-1 p-6  gap-4'>
          {
            hight.map((hi)=><Hightretingcard hi={hi}></Hightretingcard>)
          }
        </div>
    );
};

export default Hightreting;