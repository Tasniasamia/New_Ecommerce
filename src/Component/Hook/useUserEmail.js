import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { AuthContext } from '../Page/Share/AuthProvider/AuthData';

const useUserCollectiondata = () => {
    const{user}=useContext(AuthContext)
    const { refetch, data:UserDataAsEmail=[] } = useQuery({
        queryKey: ['signup_usersbyemail',user?.email],
    
      queryFn:async () => {
            const response = await axios.get(`http://localhost:6467/UserAdmin/${user?.email}` )
            console.log(response.data);

            return response.data
          },

        
        })
        
        return {UserDataAsEmail,refetch};
};

export default useUserCollectiondata;