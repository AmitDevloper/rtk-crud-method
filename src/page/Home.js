 
import { Link } from 'react-router-dom';
import { useDeletePostMutation, useGetAllPostQuery } from '../redux/Post';

const Home = () => {
const  {data} = useGetAllPostQuery()
 



const [DeleteContact]=  useDeletePostMutation()
    
  return (
    <div>
       <div className='conatiner'>
        <div className='row'>
            <div className='col-md-12  my-5 text-right '>
                <Link to="/add" className='btn btn-outline-primary' >Create Contact</Link>

            </div>
            <div className='col-md-8 mx-auto'>
          <table  className='table table-hover'>
            <thead className='text-white bg-dark  text-center'>
                <tr>
                  
                  <th scope='col'>Name</th>
                  <th scope='col'>LastName</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((contact,i)=>(
                        <tr key={i}>
                        
                        <td>{contact.Name}</td>
                        <td>{contact.Email}</td>
                        <td>{contact.Password}</td>
                        <td><Link to={`/view/${contact.id}` } className="btn btn-small btn-success ml-2">Read</Link>
                        <Link to={`/edit/${contact.id}` } className="btn btn-small btn-primary ml-2">Update</Link>
                         <button type='submit' onClick={(e)=>DeleteContact(contact.id)} className="btn btn-small btn-danger  ">Del</button> 
                        </td>
                      </tr>   
                    ))
                }
            </tbody>
          </table>
            </div>

        </div>
      
    </div>
    </div>
 
  )
}

export default Home;
