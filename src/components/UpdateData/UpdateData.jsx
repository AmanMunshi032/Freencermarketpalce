import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateData = () => {
    const {_id,TaskTitle, Category, Deadline,Buget,Description,photo}=useLoaderData()
    const handelupdateform = (e)=>{
         e.preventDefault()
      const form =e.target
  const formdata = new FormData(form)
  const updatecoffee = Object.fromEntries(formdata.entries())
  console.log(updatecoffee)
  // update data 
  fetch(`https://freelance-task-marketplace-server-ten.vercel.app/coffees/${_id}`,{
    method:"PUT",
    headers:{
         'content-type':'application/json'
    },
    body:JSON.stringify(updatecoffee)
})
.then(res => res.json())
.then(data=>{
  if(data.modifiedCount){
     Swal.fire({
      // position: "top-end",
      icon: "success",
      title: "Your data Update successfuly!",
      showConfirmButton: false,
      timer: 2000
    });
  }
})
    }
    return (
          <div className='px-8 py-4'>
          <div className='p-12 text-center space-y-4'>
                <h1 className='text-5xl font-bold text-amber-400'> Updata Data </h1>
        </div>
        <form  onSubmit={handelupdateform}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-3'>              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full  border p-4">
  <label className="label">Task Title</label>
  <input type="text"name='TaskTitle' defaultValue={TaskTitle} className="input w-full" placeholder=" Title Name" />
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  w-full border p-4">
  <label className="label">Category</label>

  <select type="text" name='Category' defaultValue={Category} className="input w-full" placeholder="Enter 
   Category" >
  <option value='web developer'> web developer</option>
  <option value='App developer'> App developer</option>
  <option value='Design'>grafix Digain</option>
  <option value='Writing '> Writing </option>
  <option value='Marketing'> Marketing</option>
  <option value='machinelearning'> machine learning</option>
  <option value='machinelearning'> software Engineering</option>
 </select>
 
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box   w-full border p-4">
  <label className="label">Deadline </label>
  <input type="date" name='Deadline' defaultValue={Deadline} className="input w-full" placeholder="Enter your Description" />
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  w-full border p-4">
  <label className="label"> Buget</label>
  <input type="text" name='Buget'  defaultValue={Buget} className="input w-full" placeholder="Enter Deadline" />
</fieldset>

<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  w-full border p-4">
  <label className="label text-xl"> Photo Url</label>
  <input type="text" name='photo' defaultValue={photo} className="input w-full" placeholder="Enter Deadline" />
</fieldset>
 <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
  <label className="label ">Description</label>
 <textarea type="text" name='Description' className='border-1' defaultValue={Description} >
 </textarea>
</fieldset>
            </div>
  
<button className='btn  w-full mt-3' >Update Button</button>
        </form>
      </div>
    );
};

export default UpdateData;