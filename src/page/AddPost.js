
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAddPostMutation } from '../redux/Post';



const AddPost = () => {
  const navigation = useNavigate()
    const [data , setData]=useState(
   {
     Name:"",
     Email : " ",
     Password : " "
   });

   const [addPost]= useAddPostMutation()
   const handleChange = (e) =>
     setData({...data, [e.target.name]:e.target.value});
   
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await addPost(data);

        setData({
          Name:"",
          Email : " ",
          Password : " "
        });
      navigation('/');
        }
       

  return (
    <div className='conatiner'>
        <div className='row'>
            <div className='display-3 text-center my-4 text-success '>
        Add Student 

            </div>
            <div className='col-md-6 shadow mx-auto'>
            <form onSubmit={handleSubmit}>

                <div className='form-group'>
                    <input type='text'
                     placeholder='name'
                     className='form-control '
                     name='Name'
                      value={data.Name}
                       onChange={handleChange} />
                </div>
                
                <div className='form-group'>
                    <input type='text'
                     placeholder='Email'
                      className='form-control my-2'
                      name='Email'
                       value={data.Email}
                        onChange={handleChange}/>
                </div>
                
                <div className='form-group'>
                    <input
                     type='text'
                     placeholder='password'
                     name='Password'
                      className='form-control my-2' 
                       value={data.Password}
                        onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <input type='submit'
                      className='btn  btn-dark my-3 bg-success' 
                      value="Add student" />
                </div>
                
            </form>
            </div>

        </div>
      
    </div>
  )
}

export default AddPost;

