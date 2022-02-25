import  'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Home from './page/Home'
import AddPost from './page/AddPost'
import ViewPost from './page/ViewPost'
import EditPost from './page/EditPost'
function App() {
  return (
   <Router>
     <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route exact path='/add' element={<AddPost/>}/>
       <Route exact path='/view/:id' element={<ViewPost/>}/>
       <Route exact path='/edit/:id' element={<EditPost/>}/>
     </Routes>
   </Router>
  );
}

export default App;
