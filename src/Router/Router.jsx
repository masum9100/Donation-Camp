import { Outlet, createBrowserRouter, Route } from "react-router-dom";
import MainRoute from "../MainRoute/MainRoute";
import Home from "../component/Home/Home";
import Donation from "../component/Donation/Donation";
import Statistics from "../component/Statistics/Statistics";
import CardDetails from "../component/CardDetails/CardDetails";

const NotFound = () => {
    return (
        <div className="text-center flex justify-center mt-48">
            <h1 className="bg-red-600 rounded-full text-white inline px-10 py-8 text-3xl ">Error 404: Page not found</h1>
        </div>
    );
};

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
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]);

export default myRoute;
