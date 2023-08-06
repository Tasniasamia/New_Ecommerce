import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthData';

const Private_route = ({children}) => {
    const {user,load}=useContext(AuthContext);
    const location=useLocation();
    console.log(location);
    console.log(load);
  
    if(user){
        return children
    }
    if(load){
        return <div>Loading.....</div>
    }
    return <Navigate to="/Login"state={{from:location}}></Navigate>
};

export default Private_route;