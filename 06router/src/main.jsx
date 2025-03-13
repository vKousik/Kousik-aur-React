import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout'
import Home from './Components/Home/home.jsx'
import About from './Components/About/about.jsx';
import Contact from './Components/Contact/contact.jsx'
import Github from './Components/Github/github.jsx'
import User from './Components/User/user.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='github' element={<Github/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userId' element={<User/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
