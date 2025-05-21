import React, { use } from 'react';
import { Link } from 'react-router';
import { Authcontext } from '../../Firebase/Authcontext';
import Swal from 'sweetalert2';


const Register = () => {
  const { CreactUser,setuser,Updateuser} =use(Authcontext)
    const handelRegister=(e)=>{
    e.preventDefault();
  const form = e.target;
  const formdata = new FormData(form)
   const name = form.name.value;
  // const email = form.email.value;
   const photo = form.photo.value;
  // const password = form.password.value;
  const {email,password,...userprofil} = Object.fromEntries(formdata.entries())
  // const user= {email,password,...user}
   console.log(email,password, userprofil)
  if(password.length < 6){
    alert("password must be equal or greter then  6")
    return;
  }
  if(!/[a-z]/.test(password)){
    alert("password must be  Lowercase letter")
    return;
  }
  if(!/[A-Z]/.test(password)){
    alert("password must be  Uppercase letter")
    return;
  }
 
    CreactUser(email,password)
    .then(result=>{
       const user = result.user
       Updateuser({displayName:name, photoURL:photo}).then(()=>{
      setuser({...user,displayName:name,photoURL:photo})
       })
       .catch(error=>{
        console.log(error)
          setuser(user)
       })
       console.log(user)
       //fece 
       fetch('http://localhost:3000/graps',{
         method:'POST',
       headers:{
      'content-type':'application/json'
    },
     body:JSON.stringify(userprofil)
       })
       .then(res => res.json())
       .then(data =>{
        console.log( ' after userprofil data ',data)
       })
        Swal.fire({
      title: "your Register succesfully!",
      text: "You clicked the button!",
      icon: "success",
    });
   
    })
      
    .catch(error=>{
      console.log(error)
    })
  
    }
    return (
       <div className="hero bg-base-200 md:min-h-screen md:mt-0 mt-10 ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl space-y-5">
          <div className="card-body">
          <h1 className="text-3xl font-bold">Register now!</h1>
            <form  onSubmit={handelRegister} className="fieldset">
              <label className="label">Name</label>
              <input type="text" name='name' className="input" placeholder="Name" />
              <label className="label">Photo url</label>
              <input type="text" name='photo' className="input" placeholder="photo url" />
              <label className="label">Email</label>
              <input type="email" name='email' className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name='password' className="input" placeholder="Password" />
              <button  type='submit' className="btn btn-neutral mt-4">Register</button>
            </form>
            <p>Already Have an Account? please<Link className=" text-blue-500 underline ml-2 font-bold" to ='/auth/Login'>Login</Link></p>
          </div>
        </div>
    </div>
    );
};

export default Register;