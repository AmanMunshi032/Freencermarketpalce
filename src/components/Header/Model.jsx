import React, { use } from 'react';
import { Authcontext } from '../../Firebase/Authcontext';

const Model = () => {
  const {user}=use(Authcontext)
    return (
        <div>    
<button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button>
<dialog className="modal ">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <div  className='text-center'>
    <div className=' bg-amber-100 rounded-md w-full'>
        <img className =" w-48 h-46 lg:ml-34  ml-18 p-6 rounded-full  flex justify-center items-center " src={user && user.photoURL
      } alt="" />
    </div>
      <p className="font-semibold">{user.displayName
}</p>
<h3 className="font-bold text-lg">{user.email}</h3>
  <button className='btn btn-primary my-4'>Logout</button>
    </div>
    
  </div>
</dialog>
        </div>
    );
};

export default Model;