import { BiUserCircle } from 'react-icons/bi'

const NavProfile = () => {
    return (
        <div className='flex items-center gap-2.5'>
            <BiUserCircle className='text-5xl' />
            <button className='px-7 py-2 text-lg font-semibold bg-[#403F3F] text-white'>Login</button>
        </div>
    );
};

export default NavProfile;