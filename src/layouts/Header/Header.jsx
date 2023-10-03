import moment from 'moment/moment';
import logo from '../../assets/images/logo.png';
const Header = () => {
    return (
        <div className='flex flex-col items-center pt-10 pb-8'>
            <img className='w-auto h-full' src={logo} alt="Dranon News" />
            <p className='text-c-dark-200 text-center mt-3 mb-1 md:text-lg md:mt-5 md:mb-2.5'>Journalism Without Fear or Favour</p>
            <p className='text-c-dark-300 text-center md:text-xl'>{moment().format('dddd, MMMM D, YYYY')}</p>
        </div>
    );
};

export default Header;