import React, { createContext, useContext, useState } from 'react';
import { app } from '../../../../../Firebase/Firebase_config';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from "firebase/auth";
export const  AuthContext=createContext(null);
const AuthData = ({children}) => {
    const auth = getAuth(app);
    const[user,setUser]=useState(null);
    const[load,setLoad]=useState(true);
    //Resister
    const signUp=(email,password)=>{
        setLoad(true);
    return createUserWithEmailAndPassword(auth, email, password)
 }
//Signin
const signIn=(email,password)=>{
    setLoad(true);
    return signInWithEmailAndPassword(auth, email, password)

}
//logOut
const logOut=()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}
    const word="Hello User";
    const userdata={word,signUp,signIn,logOut}
    return (
      <AuthContext.Provider value={userdata}>
        {children}
      
      </AuthContext.Provider>
    );
};

export default AuthData;