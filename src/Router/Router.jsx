import { Outlet, createBrowserRouter } from "react-router-dom";
import MainRoute from "../MainRoute/MainRoute";
import Home from "../component/Home/Home";
import Donation from "../component/Donation/Donation";
import Statistics from "../component/Statistics/Statistics";

import CardDetails from "../component/CardDetails/CardDetails";





const myRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainRoute></MainRoute>,
        
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('./data.json')
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/donation/:id",
                element: <CardDetails></CardDetails>,
                loader:()=>fetch('./data.json')
            }
        ]
    }
])

export default myRoute;