import React, { use } from 'react';
import { Link } from 'react-router';
import { Authcontext } from '../../Firebase/Authcontext';
import Swal from 'sweetalert2';

const Login = () => {
  const{ Siginuser}=use(Authcontext)
  const handelLogin=(e)=>{
   e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  if(password.length < 6){
    alert("password must be equal or greter then 6")
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
  Siginuser(email,password)
  .then(result=>{
    const user =result.use
    Swal.fire({
          title: "your Login succesfully!",
          text: "You clicked the button!",
          icon: "success",
        });
    console.log(user)
  })
   .catch(error=>{
      console.log(error)
    })
  console.log(email,password)
  }
    return (
          <div className="hero bg-white dark:bg-gray-800  md:min-h-screen mt-20 md:mt-0 space-y-14 ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl space-y-5">
          <div className="card-body">
          <h1 className="text-3xl font-bold">Login now!</h1>
            <form  onSubmit={handelLogin}   lassName="fieldset">
              <label className="label">Email</label>
              <input type="email" name='email'  className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password"  name='password'className="input" placeholder="Password" />
              
              <button type='submit' className="btn btn-neutral  w-full mt-4">Login</button>
            </form>
            <p>New to  this site ? please<Link className=" text-blue-500 underline ml-2 font-bold" to ='/auth/Register '>Regester</Link></p>
          </div>
        </div>
    </div>
    );
};

export default Login;