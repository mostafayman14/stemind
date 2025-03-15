
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/ui/Navbar'
import Layout from './components/layout/Layout'
import Home from './components/Home/Home'

function App() {
  let routers = createBrowserRouter([{
    path: "", element: <Layout />, children: [{
      path: 'home', element: <Home />
    }]
  }])

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
