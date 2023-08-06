import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Share/AuthProvider/AuthData';

const Login = () => {
    const word=useContext(AuthContext);
    console.log(word);
    const[success,setSuccess]=useState(null);
    const[err,setErr]=useState(null);
    const[show,setShow]=useState(false);
    const { register,reset, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data => {console.log(data);}

    return (
        <div className='py-20 lg:px-20 px-10 flex justify-center '>
              
              <div className=" lg:w-1/3 w-full ">
  
            <h1 className='text-4xl text-center font-bold '>Login Now</h1>
            <form className="card-body"onSubmit={handleSubmit(onSubmit)}>
           
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email"name="email" className="input input-bordered" {...register("email", { required: true })} />
                {errors.email && <span className='text-red-600'>This field is required</span>}

              </div>
            
          
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={show?"text":"password"} placeholder="Password"name="password" className="input input-bordered" {...register("password", { required: true })} />
                {errors.password && <span className='text-red-600'>This field is required</span>}
              
              </div>
              <div className='my-2'>
            <input type="checkbox"onClick={()=>setShow(!show)} /><span className='ms-2'>Show Password</span>
            </div>
              <input type="submit"value="Login" className="btn text-white mx-auto w-full "style={{background:"#088178",border:"#088178"}}/>
          
            
            </form>
            {err && <p className='text-red-600 text-center'>{err}</p>}
            {success && <p className='text-green-600 text-center'>{success}</p>}
 
<div className='text-center py-1'>Do you have not a  account? Please <Link to ="/Resister">Sign Up</Link></div>
          </div>
        </div>
 
    );
};

export default Login;