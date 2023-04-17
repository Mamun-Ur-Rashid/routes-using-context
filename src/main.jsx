import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/Main'
import Register from './components/Register'
import Login from './components/Login'
import Home from './components/Home'
import AuthProviders from './provider/AuthProvider'
import Orders from './components/Orders'
import PrivateRoutes from './routes/PrivateRoutes'
import Profile from './components/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/profile',
        element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path:'/orders',
        element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router}>

      </RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
