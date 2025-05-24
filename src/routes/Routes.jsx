
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
import Error from "../pages/Error/Error";

  export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
           hydrateFallbackElement:<p className=' mt-72 mb-96 text-center'><span className="loading loading-bars 
          loading-xl"></span></p>,
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
              hydrateFallbackElement:<p className=' mt-72 mb-96 text-center'><span className="loading loading-bars 
          loading-xl"></span></p>,
            loader:()=>fetch('https://freelance-task-marketplace-server-ten.vercel.app/coffees')

        },
        {
          path:'/TaskDetail/:id',
          Component:TaskDetail,
            hydrateFallbackElement:<p className=' mt-72 mb-96 text-center'><span className="loading loading-bars 
          loading-xl"></span></p>,
            loader:()=>fetch('https://freelance-task-marketplace-server-ten.vercel.app/coffees'),
           
        },
        {
          path:'/UpdateData/:id',
            hydrateFallbackElement:<p className=' mt-72 mb-96 text-center'><span className="loading loading-bars 
          loading-xl"></span></p>,
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