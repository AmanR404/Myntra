import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Header from './Components/Header'
import Home from './Pages/Home Page/Home'
import Footer from './Components/Footer'
import Dashboard from './Pages/Product Catalogue/Dashboard'
import Cart from './Pages/Cart/Cart'
import Wishlist from './Pages/Wishlist/Wishlist'

function App() {
  return (
    <>
   <Router>
      <Routes>
        <Route path='/' element={<><Header/><Home/><Footer/></>}/>
        <Route path='/catalogue' element={<><Header/><Dashboard/><Footer/></>}/>
        <Route path='/cart' element={<><Header/><Cart/><Footer/></>}/>
        <Route path='/wishlist' element={<><Header/><Wishlist/><Footer/></>}/>
      </Routes>
   </Router>
    </>
  )
}

export default App
