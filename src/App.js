import React from 'react'
import { 
 createBrowserRouter,
 createRoutesFromElements,  
  Route,
  RouterProvider
 } from 'react-router-dom'

// impoting bootstrap files
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

// css files import 
import './styles/global.css'


//pages and components import
import Layout from './components/Layout/Layout'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
// Administarion import
import Administrative from './Pages/Administrative/Administrative'
import AdminTeam from './Pages/Administrative/AdminTeam'
import AdminPolicy from './Pages/Administrative/AdminPolicy'
import AdminReport from './Pages/Administrative/AdminReport'
// staff import
import Staff from './Pages/Staff/Staff'
// branches import
import Branches from './Pages/Branches/Branches'
import Contact from './Pages/Contact/Contact'
import Services from './Pages/Services/Services'
import Resources from './Pages/Resurces/Resources'
import Divsion from './Pages/Division/Divsion'

const router = createBrowserRouter(createRoutesFromElements(
  <Route  element = {<Layout />} >
  <Route index element ={<Home />} />
  <Route path='about' element ={<About />} />
  <Route path='administration'  element ={<Administrative />} />
  <Route path='adminteam' element = {<AdminTeam/>} />
  <Route path='policies' element = {<AdminPolicy/>} />
  <Route path='reports' element = {<AdminReport/>} />
  <Route path='staff' element = {<Staff/>} />
  <Route path='branches' element = {<Branches/>} />
  <Route path='contact' element = {<Contact/>} />
  <Route path='services' element = {<Services/>} />
  <Route path='resources' element = {<Resources/>} />
  <Route path='divisions' element = {<Divsion/>} />
  
  
  </Route>
))
const App = () => {
  return (
   <RouterProvider router = {router} />
  )
}

export default App