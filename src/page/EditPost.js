
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useGetAllPostByIdQuery, useUpdatePostMutation } from '../redux/Post';




const EditPost = () => {
  const params = useParams()
  const navigation = useNavigate()
    const [data , setData]=useState(
   {
     Name:"",
     Email : " ",
     Password : " "
   });
const [UpdatePost]= useUpdatePostMutation()
   const {data: post} = useGetAllPostByIdQuery(params.id)

useEffect(()=>
{
  if(post){
    setData(post)
  }
},[post])

   const handleChange = (e) =>
     setData({...data, [e.target.name]:e.target.value});
   
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await UpdatePost(data);

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
            <div className='display-3 text-center my-4 '>
        Add Student 

            </div>
            <div className='col-md-6 shadow mx-auto'>
            <form onSubmit={handleSubmit}>

                <div className='form-group'>
                    <input type='text'
                     placeholder='name'
                     className='form-control '
                     name='Name'
                      value={data?.Name}
                       onChange={handleChange} />
                </div>
                
                <div className='form-group'>
                    <input type='text'
                     placeholder='Email'
                      className='form-control my-2'
                      name='Email'
                       value={data?.Email}
                        onChange={handleChange}/>
                </div>
                
                <div className='form-group'>
                    <input
                     type='text'
                     placeholder='password'
                     name='Password'
                      className='form-control my-2' 
                       value={data?.Password}
                        onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <input type='submit'
                      className='btn  btn-dark my-3' 
                      value="Add student" />
                </div>
                
            </form>
            </div>

        </div>
      
    </div>
  )
}

export default EditPost;

