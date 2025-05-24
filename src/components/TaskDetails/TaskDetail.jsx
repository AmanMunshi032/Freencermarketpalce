import React, {  useEffect, useState } from 'react';
import { useLoaderData, useParams,  } from 'react-router';
import TaskDitelscard from './TaskDitelscard';
import { Darktheme } from '../Darktheme/Darkthem';

const TaskDetail = () => {
const[ditels,setditels]=useState({})
  const {id}= useParams()
    const cardditels = useLoaderData()
  
    useEffect(()=>{
        const newdata= cardditels.filter((singledata)=>singledata._id == id)
        setditels(newdata)
    },[id, cardditels])
    return (
    
 <div className=' bg-white dark:bg-gray-800 '>
          <TaskDitelscard ditels={ditels} ></TaskDitelscard>
        </div>
      
       
    ); 
};

export default TaskDetail;