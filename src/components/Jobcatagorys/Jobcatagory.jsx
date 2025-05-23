import React, { useEffect, useState } from 'react';
import {  } from 'react-router';


const Jobcatagory = () => {
const [users, setUsers] = useState([]);
console.log(users)
 useEffect(()=>{
     fetch('/jobcatagory.json')
  .then(res => res.json())
  .then(data=>{
    setUsers(data)
  })
   .catch(err => console.error(err));
 },[])
//  console.log(users)

    return (
        
        <div className=' md:w-7xl md:mx-auto grid md:grid-cols-3 grid-cols-2 p-6  gap-4'>
         <div>
          
         </div>
       
        </div>
    );
};

export default Jobcatagory;