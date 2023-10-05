import { Navigate, useLocation } from "react-router-dom";
import useGetContext from "../hooks/useGetContext";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {

    const location = useLocation();
    console.log(location);

    const { currentUser } = useGetContext();
    if(currentUser === null){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;