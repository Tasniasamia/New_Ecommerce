import React, { createContext, useContext, useEffect, useState } from 'react';
import { app } from '../../../../../Firebase/Firebase_config';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,updateProfile} from "firebase/auth";
export const  AuthContext=createContext(null);
const AuthData = ({children}) => {
    const auth = getAuth(app);
    const[user,setUser]=useState(null);
    const[load,setLoad]=useState(true);
    //Resister
    const signUp=(email,password)=>{
        setLoad(true);
    return createUserWithEmailAndPassword(auth, email, password);
 }
//Signin
const signIn=(email,password)=>{
    setLoad(true);
    return signInWithEmailAndPassword(auth, email, password)

}
//logOut
const logOut=()=>{
    setLoad(false)
    setUser(" ");
  
    signOut(auth).then(() => {
    
      }).catch((error) => {
      
      });
}
//Manage User
useEffect(()=>{
const unsubscribe=onAuthStateChanged(auth, (user) => {
      setLoad(false);
        if (user) {
          

            setUser(user);
          const uid = user.uid;
       
        } 
      });
// }
console.log(user);

return ()=>{
    unsubscribe();
}

// eslint-disable-next-line react-hooks/exhaustive-deps
},[])
// Update UserProfile
const UpdateProfile=(name,photo)=>{
  setLoad(true)
  return updateProfile(auth.currentUser, {
    displayName: name, photoURL: photo
  })
}
    const word="Hello User";
    const userdata={word,signUp,signIn,logOut,user,UpdateProfile,load}
    return (
      <AuthContext.Provider value={userdata}>
        {children}
      
      </AuthContext.Provider>
    );
};

export default AuthData;