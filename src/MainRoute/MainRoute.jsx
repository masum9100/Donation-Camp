import { Outlet } from "react-router-dom";
import NavBar from "../component/Nav/NavBar";



const MainRoute = () => {
    return (
        <div className="max-w-screen-xl mx-auto text-center items-center">
           <NavBar></NavBar>
           <Outlet></Outlet>
           
        </div>
    );
};

export default MainRoute;