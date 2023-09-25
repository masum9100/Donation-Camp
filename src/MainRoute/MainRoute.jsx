import { Outlet } from "react-router-dom";
import NavBar from "../component/Nav/NavBar";
import Home from "../component/Home/Home";


const MainRoute = () => {
    return (
        <div className="">
           <NavBar></NavBar>
           <Outlet></Outlet>
           
        </div>
    );
};

export default MainRoute;