import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "./Main"
import { Login } from "./Login";
import { Check } from "./Create";

const router = createBrowserRouter ([
    {
        element:<Layout/>,
        children:[
            {
                //get
                path:"/login",
                element: <Login/>
            },
            {
                //get
                path:"/",
                element: <Home/>
            }
        ]
    },
    {
        //create
        path:"/checkpoint",
        element: <Check/>
    }
])

export{router};