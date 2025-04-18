import React from 'react'
import  {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from '../src/Components/Signup'
import Home from '../src/Components/Home'
import About from '../src/Components/About'
import Shop from '../src/Components/Shop'
import Login from '../src/Components/Login'
import Adminelog from '../src/Components/Adminelog'
import Contact from '../src/Components/Contact'
import ProtectedRoutes from '../src/Components/ProtectedRoutes'
import CartData from '../src/Components/CartData'
import ProductsDetails from './Components/ProductsDetails'
import Billingsonline from './Components/Billingsonline'
import Billingsoffline from './Components/Billingsoffline'
import Success from './Components/Success'
import AdmineLogs from '../src/Components/Adminelog'

const App = () => {
  return (
  <>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/adminelogs' element={<AdmineLogs/>}></Route>
   
    <Route element={<ProtectedRoutes/>}>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/shop' element={<Shop/>}></Route>
    <Route path='/adminelog' element={<Adminelog/>}></Route>
    <Route path='/cartdata' element={<CartData/>}></Route>
    <Route path='/productsdetails/:id' element={<ProductsDetails/>}></Route>
    <Route path='/billingsonline/:id' element={<Billingsonline/>}></Route>
    <Route path='/billingsoffline/:id' element={<Billingsoffline/>}></Route>
    <Route path='/success' element={<Success/>}></Route>
    </Route>

  </Routes>
</BrowserRouter>
  </>
  )
}

export default App
