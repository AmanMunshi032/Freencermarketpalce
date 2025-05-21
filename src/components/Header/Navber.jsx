import React, { use,} from 'react';
import { Link, NavLink } from 'react-router';
import './Nave.css'
import { Authcontext } from '../../Firebase/Authcontext';
// const [show,setshow]=useState(false)

const Navber = () => {
  const {user,singout }=use(Authcontext)
   const handelLOgout=()=>{
    console.log("dfkjfdh")
     singout().then(()=>{
      alert("your logout successfuly !")
     })
      .catch(error=>{
        console.log(error)
       })
   }
    const links = <>
    <li><NavLink to= '/'>Home</NavLink></li>
    <li><NavLink  to= '/AddTask '>Add Task </NavLink></li>
     <li> <NavLink to= '/Bloge'>Browse Tasks</NavLink></li> 
     <li> <NavLink to= '/Hold'>My Posted Tasks</NavLink></li> 
 </>
    return (
       <div>
  <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
             {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">
          {links}
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          {
            user?" ":<div className='space-x-4'>
              <Link to='/auth/Login'><button className='btn btn-primary'>Login</button></Link>
       <Link to='/auth/Register'>
        <button className='btn btn-primary'>Sigup</button>
       </Link>
            </div>
          }
     
     
        </div>
        {/* hi */}
        <div>
         <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
          src={user && user.photoURL} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li>{user && user.displayName}</li>
        <li> {user && user.email} </li>
        <li><button onClick={handelLOgout} className='btn '>Logout</button></li>
      </ul>
    </div>
        </div>
       {/* hello */}
      </div>
       </div>
  
      
     
    );
};

export default Navber;