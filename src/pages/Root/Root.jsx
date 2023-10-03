import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="font-poppins c-container">
            <Outlet />
        </div>
    );
};

export default Root;