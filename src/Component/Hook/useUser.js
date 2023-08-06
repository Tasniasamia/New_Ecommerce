import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Page/Share/AuthProvider/AuthData';

const useUser = () => {
   const{user}=useContext(AuthContext);
   const[User,setUser]=useState({})
  useEffect(()=>{
   fetch(`http://localhost:6467/UserAdmin/${user?.email}`)
   .then(res=>res.json())
   .then(data=>{setUser(data)})

  },[user])
  return User;
};

export default useUser;