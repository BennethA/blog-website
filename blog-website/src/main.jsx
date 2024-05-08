import './index.css'
import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import About from './pages/About.jsx'
import SingleBlog from './pages/SingleBlog.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/blogs",
        element: <Blogs/>
      },
      { 
        path: "/about",
        element: <About/>
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog/>,
        //loader fetches data for the route, then useLoaderData accesses it in Singleblog component
        loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`) 
      },
      {
        path: "*",
        element: <Home/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
