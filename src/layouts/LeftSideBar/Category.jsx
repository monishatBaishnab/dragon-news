import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const Category = ({name}) => {
    return (
        <li><NavLink to={`/${name}`} className={({isActive, isPending}) => isActive ? 'bg-[#E7E7E7] text-c-dark-300 px-5 py-3 w-full block' : isPending ? 'bg-[#E7E7E7] text-c-dark-300 px-5 py-3 w-full block' : 'px-5 py-3 w-full block text-c-dark-100 transition-all hover:bg-[#E7E7E7] hover:text-c-dark-300'}>{name}</NavLink></li>
    );
};

Category.propTypes = {
    name: PropTypes.string,
}

export default Category;