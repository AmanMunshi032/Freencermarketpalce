
import {createBrowserRouter} from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Authlaout from "../layout/Authlaout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddTask from "../pages/AddTask/AddTask";

  export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      children:[
        {
            path:'/',
            loader:()=>fetch('http://localhost:3000/grapes'),
            Component:Home
        },
        {
            path:'/AddTask ',
            Component:AddTask
        },
        {
            path:'/Bloge',
            element: <h1>this is Bloge bage</h1>

        },
        {
            parh:'/Hold',
            element: <h1>this is Bloge bage</h1>
        }
      ]
    },
    {
        path:'/auth',
        Component:Authlaout,
        children:[
          {
            path:'/auth/Login',
            Component:Login
          },
          {
            path:'/auth/Register',
            Component:Register
          }
        
        ]
    }
  ]);