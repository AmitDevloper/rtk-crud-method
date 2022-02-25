import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetAllPostByIdQuery } from '../redux/Post';

const ViewPost = () => {
  const params=useParams()
  //const {id}= params
  const {data} = useGetAllPostByIdQuery(params.id)


  console.log(data);
  return (
  
    <div className='conatiner'>
        <div className='row'>
           
            <div className='col-md-8 mx-auto my-4'>
          <table  className='table table-hover'>
            <thead className='text-white bg-dark  text-center'>
                <tr>
                  <th scope='col'>id</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Password</th>
                  
                </tr>
            </thead>
            <tbody>
               <tr>
               <td>{data?.id}</td>            
     <td>{data?.Name}</td>
     <td>{data?.Email}</td>
     <td>{data?.Password}</td> 
               </tr>
            </tbody>
          </table>
            </div>

        </div>
      
    </div>
    










    
  )
}

export default ViewPost;
