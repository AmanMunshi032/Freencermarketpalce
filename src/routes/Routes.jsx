
import {createBrowserRouter} from "react-router";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Authlaout from "../layout/Authlaout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddTask from "../pages/AddTask/AddTask";
import BrowseTask from "../pages/BrowseTask/BrowseTask";
import MyPostedTasks from "../pages/MyPostedTasks/MyPostedTasks";
import TaskDetail from "../components/TaskDetails/TaskDetail";
import UpdateData from "../components/UpdateData/UpdateData";
import Jobcatagory from "../components/Jobcatagorys/Jobcatagory";

  export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      children:[
        {
            path:'/',
            loader:()=>fetch('https://freelance-task-marketplace-server-ten.vercel.app/grapes'),
            Component:Home,
             
        },
        {
            path:'/AddTask ',
            Component:AddTask
          
        },
         {
            path:'MyPostedTasks',
            Component:MyPostedTasks,
           
        },
        {
            path:'/BrowseTask',
            Component:BrowseTask,
            loader:()=>fetch('https://freelance-task-marketplace-server-ten.vercel.app/coffees')

        },
        {
          path:'/TaskDetail/:id',
          Component:TaskDetail,
            loader:()=>fetch('https://freelance-task-marketplace-server-ten.vercel.app/coffees'),
           
        },
        {
          path:'/UpdateData/:id',
          Component:UpdateData,
             loader:({params})=>fetch(`https://freelance-task-marketplace-server-ten.vercel.app/coffees/${params.id}`)
        },
      
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