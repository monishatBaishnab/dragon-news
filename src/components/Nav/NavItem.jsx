import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';


const NavItem = ({route}) => {
    const {path, label} = route;
    return (
        <li>
            <NavLink className={({ isActive, isPending }) => isActive ? 'text-c-pink' : isPending ? 'text-c-pink' : 'text-c-dark-200 transition-colors hover:text-c-pink'} to={path}>{label}</NavLink>
        </li>
    );
};

NavItem.propTypes ={
    route: PropTypes.object,
}

export default NavItem;