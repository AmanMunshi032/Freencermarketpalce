import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router';
import Table from '../../components/Table/Table';
import Swal from 'sweetalert2';

const MyPostedTasks = () => {
const [shuduldata,setshuduldata]=useState([])
useEffect(()=>{
    fetch('https://freelance-task-marketplace-server-ten.vercel.app/coffees')
    .then(res=>res.json())
    .then(data=>{
       setshuduldata(data)
  
    })
},[ ])
    // const shuduls = useLoaderData()
    const handeldelete =(id)=>{
   
    fetch(`https://freelance-task-marketplace-server-ten.vercel.app/coffees/${id}`,{
        method:"DELETE",
        headers:{
          'content-type':'application/json'
        }
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
      
         if(data.deletedCount > 0){
     Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
})
   Swal.fire({
      title: "Deleted!",
      text: "Your data has been deleted.",
      icon: "success"
    });
  
        const remainingdata =shuduldata.filter((shudul)=> shudul._id !==id)
        setshuduldata(remainingdata)
       }
      })
    }
    return (
        <div className=' bg-white dark:bg-gray-800 dark:text-white'>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='bg-white dark:bg-gray-800 dark:text-white'>
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