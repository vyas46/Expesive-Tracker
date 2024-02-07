import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';
import Login from './component/Login';
import Signup from './component/Signup';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
      

      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup />}></Route> 
        <Route path='/home' element={<Home />}></Route>
        <Route path='/addProduct' element={<AddProduct />}></Route>
        <Route path='/editProduct/:id' element={<EditProduct />}></Route>
      </Routes>

    </>

  );
}

export default App;