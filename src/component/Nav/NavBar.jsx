import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const NavBar = () => {
    return (
        <div className="md:flex justify-between items-center mt-10 px-6 text-center max-w-screen-xl mx-auto ">
            <Logo></Logo>
            <nav>
                <ul className="grid md:flex gap-4 md:gap-9 ">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending " : isActive ? "text-[#FF444A] underline text-lg font-normal" : "text-lg font-normal"
                            }
                            
                        > 
                            Home
                        </NavLink>

                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline text-lg font-normal" : "text-lg font-normal"
                            }
                        >
                            Donation
                        </NavLink>

                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline text-lg font-normal" : "text-lg font-normal"
                            }
                        >
                            Statistics
                        </NavLink>

                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;