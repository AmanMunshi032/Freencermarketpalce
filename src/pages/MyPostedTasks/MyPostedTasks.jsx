import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router';
import Table from '../../components/Table/Table';

const MyPostedTasks = () => {
const [shuduldata,setshuduldata]=useState([])
useEffect(()=>{
    fetch('http://localhost:3000/coffees')
    .then(res=>res.json())
    .then(data=>{
       setshuduldata(data)
    })
},[ ])
    // const shuduls = useLoaderData()
    const handeldelete =(id)=>{
      fetch(`http://localhost:3000/coffees/${id}`,{
        method:"DELETE",
        headers:{
          'content-type':'application/json'
        }
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
         if(data.deletedCount > 0){
        const remainingdata =shuduldata.filter((shudul)=> shudul._id !==id)
        setshuduldata(remainingdata)
       }
      })
    }
    return (
        <div className=' m-2'>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Task Title</th>
        <th>Category</th>
        <th>Deadline</th>
        <th>Form Edit</th>
      </tr>
    </thead>
    <tbody>
        {
            shuduldata.map((shudul , index)=><Table key={shudul._id}
            index={index}
             handeldelete={ handeldelete}
             shudul={shudul}
             ></Table> )
        }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyPostedTasks;