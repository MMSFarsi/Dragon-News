import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import CategoryNews from './pages/CategoryNews';
import AuthLayout from './components/layout-components/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './provider/AuthProvider';
import NewsDetails from './pages/NewsDetails';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:"",
        element: <Navigate to={"/category/01"}></Navigate>
      },
      {
        path:"/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader:({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
      }
    ]
  },
  {
    path: "/news/:id",
    element: <PrivateRoute>
      <NewsDetails></NewsDetails>
    </PrivateRoute>,
    loader: ({params})=> fetch (`https://openapi.programming-hero.com/api/news/${params.id}`)
},
{
    path:"auth",
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:"/auth/login",
        element: <Login></Login>
      },
      {
        path:"/auth/register",
        element: <Register></Register>
      }
    ]
}, 
{
    path:"*",
    element: <h1>Error </h1>
}, 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
