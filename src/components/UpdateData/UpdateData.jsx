import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateData = () => {
    const {_id,TaskTitle, Category, Deadline,Budget,Description}=useLoaderData()
    const handelupdateform = (e)=>{
         e.preventDefault()
      const form =e.target
  const formdata = new FormData(form)
  const updatecoffee = Object.fromEntries(formdata.entries())
  console.log(updatecoffee)
  // update data 
  fetch(`http://localhost:3000/coffees/${_id}`,{
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
      title: "Your data added successfuly!",
      showConfirmButton: false,
      timer: 1500
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

  <input type="" name='Category' defaultValue={Category} className="input w-full" placeholder="Enter  Category" />
 
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box   w-full border p-4">
  <label className="label">Deadline </label>
  <input type="date" name='Deadline' defaultValue={Deadline} className="input w-full" placeholder="Enter your Description" />
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  w-full border p-4">
  <label className="label"> Budget</label>
  <input type="text" name='Budget'  defaultValue={Budget} className="input w-full" placeholder="Enter Deadline" />
</fieldset>
            </div>
   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
  <label className="label ">Description</label>
 <textarea type="text" name='Description' defaultValue={Description} >
 </textarea>
</fieldset>
<button className='btn  w-full mt-3' >Update Button</button>
        </form>
      </div>
    );
};

export default UpdateData;