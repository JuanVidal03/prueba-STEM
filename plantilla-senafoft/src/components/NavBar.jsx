import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
    Bars3BottomLeftIcon,
    UserCircleIcon,
    ArrowLeftEndOnRectangleIcon
} from "@heroicons/react/24/solid";

import { GlobalContext } from "../context/GlobalContext";

import { logout } from "../services/auth.services";

const NavBar = () => {

    const { setIsMenuOpen, isMenuOpen } = useContext(GlobalContext);

    const navigate = useNavigate();

    const hanldeMenuState = () => isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);

    const handleLogout = async() => {
        try {
            await logout(); 
            navigate("/login")
        } catch (error) {
            console.log(error);
        }
    } 

    return (
        <div className="flex gap-2 justify-end py-4">
            <Bars3BottomLeftIcon onClick={hanldeMenuState} className="w-8 cursor-pointer xl:hidden"/>
            <UserCircleIcon className="w-8 cursor-pointer"/>
            <ArrowLeftEndOnRectangleIcon onClick={handleLogout} className="w-8 cursor-pointer"/>
        </div>
    );
}

export default NavBar;
