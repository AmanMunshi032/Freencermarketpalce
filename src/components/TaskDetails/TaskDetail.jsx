import React, {  useEffect, useState } from 'react';
import { useLoaderData, useParams,  } from 'react-router';
import TaskDitelscard from './TaskDitelscard';

const TaskDetail = () => {
     const {_id} = useParams()
    console.log(_id)
    const Appditels = useLoaderData()
    console.log(Appditels)
    const[ditels,setditels]=useState({})
    
    useEffect(()=>{
        const newdata= Appditels.filter((singledata)=>singledata.id == _id)
        setditels(newdata)
    },[_id, Appditels])
    return (
        <div>
          <TaskDitelscard ditels={ditels} ></TaskDitelscard>
        </div>
    ); 
};

export default TaskDetail;