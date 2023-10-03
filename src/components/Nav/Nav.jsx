import NavItem from "./NavItem";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import PropTypes from 'prop-types';


const routes = [
  {
    id: 1,
    path: "/",
    label: "Home",
  },
  {
    id: 2,
    path: "/about",
    label: "About",
  },
  {
    id: 3,
    path: "/career",
    label: "Career",
  },
];


const Nav = ({handleClick}) => {
  const show = handleClick();
  return (
    <div className={`absolute top-0 bottom-0 w-[250px] bg-white p-5 pt-10 border-r transition-all ${show === true ? 'visible opacity-100 left-0' : ' invisible opacity-0 -left-2'} md:border-r-0 md:pt-0 md:p-0 md:bg-transparent md:w-auto md:static md:visible md:opacity-100`}>
      <div className="relative">
        <span onClick={() => handleClick('close')} className="absolute -top-5 right-0 text-2xl text-c-pink inline-block md:hidden"><AiOutlineCloseCircle /></span>
        <ul className="flex flex-col items-start gap-4 md:items-center md:flex-row">
          {
            routes.map((route, idx) => <NavItem key={idx} route={route} />)
          }
        </ul>
      </div>
    </div>
  );
};

Nav.propTypes = {
  handleClick: PropTypes.func,
}

export default Nav;
