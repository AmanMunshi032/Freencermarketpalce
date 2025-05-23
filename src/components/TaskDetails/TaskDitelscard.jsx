import React from 'react';

const TaskDitelscard = ({ditels}) => {
    console.log(ditels)
    return (
        <div className='max-w-4xl mx-auto p-8 space-y-4 my-6 md:flex gap-5 bg-emerald-100 rounded-2xl'>
          <div>
            <img src={ditels.photo} alt="" />
          </div>
          <div className='space-y-5 mt-4'>
            <h1 ><span className=' text-fuchsia-400 text-2xl font-bold'>Title :</span> {ditels.TaskTitle}</h1>
            <p><span className=' text-fuchsia-400 text-2xl font-bold'>Dadeline :</span> {ditels.Deadline} </p>
            <p> <span className='text-fuchsia-400 text-2xl font-bold'>Category :</span> {ditels.Category}</p>
            <p> <span className='text-fuchsia-400 text-2xl font-bold'>Budget:</span>{ditels.Budget}</p>
                 <p> <span className='text-fuchsia-400 text-2xl font-bold'> Description :</span>{ditels.Description}</p>
          </div>
        </div>
    );
};

export default TaskDitelscard;