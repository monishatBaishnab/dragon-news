import { useState } from "react";
import Nav from "../../components/Nav/Nav";
import NavProfile from "../../components/Nav/NavProfile";
import { FaBarsProgress } from 'react-icons/fa6'


const Navbar = () => {
    const [isShow, setIsShow] = useState(false);
    const handleClick = (action) => {
        if(action === 'open'){
            setIsShow(true);
        }
        if(action === 'close'){
            setIsShow(false);
        }
        return isShow;
    }
    return (
        <nav className="flex items-center">
            <button onClick={() => handleClick('open')} className="text-3xl text-c-dark-300 hover:text-c-pink transition-all p-2 inline-block md:hidden">
                <FaBarsProgress />
            </button>
            <div className="grow flex justify-center sm:ml-[160px]">
                <Nav handleClick={handleClick} />
            </div>
            <div className="ml-auto">
                <NavProfile />
            </div>
        </nav>
    );
};

export default Navbar;