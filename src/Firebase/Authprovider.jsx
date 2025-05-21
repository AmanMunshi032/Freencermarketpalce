import React, { useEffect, useState } from 'react';
import { Authcontext } from './Authcontext';
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { auth } from '../Firebaseinit';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Authprovider = ({ children }) => {
const [user,setuser]=useState(null)
const [mode,setmode]=useState()
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
const handelDarklight =()=>{
  if(mode == "Light"){
    setmode("Dark")
    document.body.style.backgroundColor="black"
  }
  else{
      setmode("Light")
    document.body.style.backgroundColor="white"
  }
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
    singout ,
    handelDarklight
}

    return <Authcontext value={userinfo}>{ children }</Authcontext>
}
  

export default Authprovider;