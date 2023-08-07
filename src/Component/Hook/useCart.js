import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { AuthContext } from '../Page/Share/AuthProvider/AuthData';
// import { AuthContext } from '../Page/Share/AuthProvider/AuthData';

const useCart = () => {
    const{user}=useContext(AuthContext)
    const { refetch, data:cartData=[] } = useQuery({
        queryKey: ['signup_usersbyemail',user?.email],
    
      queryFn:async () => {
            const response = await axios.get(`https://ecommerce-server-virid.vercel.app/Cart/${user?.email}` )
            console.log(response.data);

            return response.data
          },

        
        })
        
        return [cartData,refetch];
};

export default useCart;