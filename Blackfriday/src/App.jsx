
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Login from './pages/Login'
import Productdetail from './pages/Productdetail'
import Cart from './pages/Cart'

function App() {
 

  return (
    <>
    <Routes>
      <Route path='/'element= {<Home/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/productdetail/:id' element={<Productdetail/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    
    </>
  )
}

export default App
