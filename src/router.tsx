import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import RegisterPage from "./pages/Register";
import DashboardLayout from "./layouts/DashboardLayout";

export const router=  createBrowserRouter([
    {

        path:'/',
        element: <DashboardLayout/>,
        children:[
            {path:'home',
            element:<HomePage/>}
        ]

       
    },
    {
        path:'/login',
        element:<LoginPage/>
    },
    {
        path:'/register',
        element:<RegisterPage/>
    }
])