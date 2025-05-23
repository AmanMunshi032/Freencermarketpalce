import React, { useEffect, useState } from 'react';
import {  } from 'react-router';
import Freelencerjob from './Freelencerjob';


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
        
        <div className='md:w-7xl md:mx-auto grid md:grid-cols-3 grid-cols-1 p-6  gap-4'>
          {
            users.map((user)=> <Freelencerjob user={user}></Freelencerjob> )
          }
        
       
        </div>
    );
};

export default Jobcatagory;