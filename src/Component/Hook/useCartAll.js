import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { AuthContext } from '../Page/Share/AuthProvider/AuthData';
// import { AuthContext } from '../Page/Share/AuthProvider/AuthData';

const useCartAll = () => {
    const{user}=useContext(AuthContext)
    const { refetch, data:cartDataAll=[] } = useQuery({
        queryKey: ['signup_usersbyemail'],
    
      queryFn:async () => {
            const response = await axios.get(`http://localhost:6467/CartCollection` )
            console.log(response.data);

            return response.data
          },

        
        })
        
    return [refetch,cartDataAll];
};

export default useCartAll;