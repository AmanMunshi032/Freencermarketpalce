import React, {  useEffect, useState } from 'react';
import { useLoaderData, useParams,  } from 'react-router';
import TaskDitelscard from './TaskDitelscard';

const TaskDetail = () => {
const[ditels,setditels]=useState({})
  const {id}= useParams()
 
    const cardditels = useLoaderData()
   console.log(cardditels)
    // const newdata= cardditels.filter((singledata)=>singledata._id == id)
    // console.log(newdata)
    useEffect(()=>{
        const newdata= cardditels.filter((singledata)=>singledata._id == id)
        setditels(newdata)
    },[id, cardditels])
    return (
        <div>
          <TaskDitelscard ditels={ditels} ></TaskDitelscard>
        </div>
    ); 
};

export default TaskDetail;