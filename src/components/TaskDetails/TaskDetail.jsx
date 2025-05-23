import React, {  useEffect, useState } from 'react';
import { useLoaderData,  } from 'react-router';
import TaskDitelscard from './TaskDitelscard';

const TaskDetail = (id) => {
    const Appditels = useLoaderData()
   console.log(Appditels)
    const[ditels,setditels]=useState({})
      console.log(ditels)
    useEffect(()=>{
        const newdata= Appditels.filter((singledata)=>singledata._id == id)
        setditels(newdata)
    },[id, Appditels])
    return (
        <div>
          <TaskDitelscard ditels={ditels} ></TaskDitelscard>
        </div>
    ); 
};

export default TaskDetail;