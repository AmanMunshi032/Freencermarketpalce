import React, { useEffect, useState } from 'react';
import { Authcontext } from './Authcontext';
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebaseinit';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Authprovider = ({ children }) => {
const [user,setuser]=useState(null)
// console.log(user)
const CreactUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}
const Siginuser =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
const Updateuser=(updatedata)=>{
    return updateProfile(auth.currentUser,updatedata)

}
const singout =()=>{
    return signOut(auth)
}

useEffect(()=>{
 const unscrip = onAuthStateChanged(auth,(currentUser)=>{
setuser(currentUser)
})
return ()=>{
  unscrip()
}
},[])
const userinfo={
   CreactUser ,
    Siginuser,
    user,
    setuser,
    Updateuser,
    singout 
}

    return <Authcontext value={userinfo}>{ children }</Authcontext>
}
  

export default Authprovider;