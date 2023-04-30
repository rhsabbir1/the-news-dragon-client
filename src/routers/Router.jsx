import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pags/Home/Home/Home";
import Catagories from "../pags/Home/Catagories/Catagories";
import Newslayout from "../layout/Newslayout";
import News from "../pags/News/News/News";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/catagory/:id',
                element:<Catagories></Catagories>,
                loader : ({params}) => fetch(`http://localhost:5000/catagoris/${params.id}`)
            }
        ]
    },
    {
        path:'news',
        element:<Newslayout></Newslayout>,
        children:[
            {
                path: ':id',
                element:<News></News>
            }
        ]
    }
])

export default router;