import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Share/AuthProvider/AuthData';
import Swal from 'sweetalert2';

const Resister = () => {
    const{user,signUp,UpdateProfile,logOut}=useContext(AuthContext);
    const [err,setError]=useState(null);
    const { register,reset, handleSubmit,formState: { errors } } = useForm();
    const onSubmit =( data) => {
        console.log(data);
        data.status="user";
        signUp(data.email,data.password).then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          UpdateProfile(data.name,data.photo).then(() => {
         fetch('http://localhost:6467/User',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
         }).then(res=>res.json())
         .then(data=>{console.log(data);
        if(data.insertedId){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
              reset();
              logOut();
        }
        
        }
         
         )
        
          
          }).catch((error) => {
         
          });
     
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
         
          });
    }
    return (
        <div className='flex justify-center py-20 lg:px-20 px-10'>
            <div className='w-full lg:w-1/2'>
            <h1 className='text-4xl text-center font-bold '>Resister Now</h1>
            <form className="card-body"onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name"name="name" className="input input-bordered"{...register("name", { required: true })} />
                {errors.name && <span className='text-red-600'>This field is required</span>}

              </div>
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
                <input type="text" placeholder="password"name="password" className="input input-bordered"{...register("password", { required: true, pattern: /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-])/i,maxLength: 20,minLength:6 })} />
                {errors.password?.type === 'required' &&<span className='text-red-600'>This field is required</span>}
                {errors.password?.type === 'minLength' && <p role="alert"className='text-red-600'>6 length required</p>}
                {errors.password?.type === 'pattern' && <p role="alert"className='text-red-600'>Password can be at least one upper case,at least one lower case English letter,at least one special characte</p>}
              
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confrim Password</span>
                </label>
                <input type="text" placeholder="Corfrim Password"name="confrim_password" className="input input-bordered" {...register("confrim_password", { required: true })}  />
               
                {errors.email && <span className='text-red-600'>This field is required</span>}
{err && <p className='text-red-600'>{err}</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="photo"name="photo" className="input input-bordered" {...register("photo", { required: true })} />
                {errors.photo && <span className='text-red-600'>This field is required</span>}

              </div>
              <input type="submit"value="Resister"style={{background:"#088178",border:"#088178"}} className="btn  text-white mx-auto w-full my-5"/>
            
            </form>  
            <div className='text-center py-1'>Do you have not a  account? Please <Link to ="/Login">Login</Link></div>

            </div>

        </div>
    );
};

export default Resister;