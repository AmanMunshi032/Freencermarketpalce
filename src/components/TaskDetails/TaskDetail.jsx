import React from 'react';
import { useLoaderData } from 'react-router';

const TaskDetail = () => {
    const ditels = useLoaderData()
    console.log(ditels)
    return (
        <div>
         <h1>hello ditels page</h1>
        </div>
    ); 
};

export default TaskDetail;