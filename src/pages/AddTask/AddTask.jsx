import React, { use } from 'react';
import Swal from 'sweetalert2';
import { Authcontext } from '../../Firebase/Authcontext';

const AddTask = () => {
  const{user}=use(Authcontext)
const handelTask =(e)=>{
     e.preventDefault()
      const form =e.target
  const formdata = new FormData(form)
  const updatecoffee = Object.fromEntries(formdata.entries())
  console.log(updatecoffee)

  fetch('http://localhost:3000/grapes',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(updatecoffee )
  })
  .then(res=>res.json())
  .then(data=>{
    console.log("after data",data)
     Swal.fire({
  // position: "top-end",
  icon: "success",
  title: "Your data added successfuly!",
  showConfirmButton: false,
  timer: 1500
});
  })
}
    return (
          <div className='px-8 py-4'>
          <div className='p-12 text-center space-y-4'>
                <h1 className='text-5xl font-bold text-amber-400'>Add Task</h1>
        </div>
        <form  onSubmit={handelTask}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-3'>              <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full  border p-4">
  <label className="label">Task Title</label>
  <input type="text"name='TaskTitle' className="input w-full" placeholder=" Title Name" />
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  w-full border p-4">
  <label className="label">Category</label>

  <input type="" name='Category' className="input w-full" placeholder="Enter  Category" />
 
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box   w-full border p-4">
  <label className="label">Deadline </label>
  <input type="date" name='Deadline' className="input w-full" placeholder="Enter your Description" />
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  w-full border p-4">
  <label className="label"> Budget</label>
  <input type="text" name='Budget' className="input w-full" placeholder="Enter Deadline" />
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  w-full border p-4">
  <label className="label">Email</label>
   <p type="email" name='email' className=' input w-full text-xl'>{user&& user.email}</p>
</fieldset>
<fieldset className="fieldset bg-base-200 border-base-300 rounded-box  w-full border p-4">
  <label className="label">UserName</label>
    <p type="text" name='name' className=' input w-full text-xl'>{user && user.displayName}</p>
</fieldset>
            </div>
   <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
  <label className="label ">Description</label>
 <textarea type="text" name='Description' >
 </textarea>
</fieldset>
<button className='btn  w-full mt-3' >Add Button</button>
        </form>
      </div>
    );
};

export default AddTask;