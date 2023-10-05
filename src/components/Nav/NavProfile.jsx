import { BiUserCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import useGetContext from '../../hooks/useGetContext';

const NavProfile = () => {
    const { currentUser, logOut } = useGetContext();

    return (
        <div className='flex items-center gap-2.5'>
            <BiUserCircle className='text-5xl' />
            {currentUser !== null ?
                <button onClick={() => logOut()} className='px-7 py-2 text-lg font-semibold bg-[#403F3F] text-white'>Logout</button>
                : <Link to='/login' className='px-7 py-2 text-lg font-semibold bg-[#403F3F] text-white'>Login</Link>
            }
        </div>
    );
};

export default NavProfile;