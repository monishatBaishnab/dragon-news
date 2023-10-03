import moment from 'moment/moment';
import logo from '../../assets/images/logo.png';
import { useEffect, useState } from 'react';
const Header = () => {
    const time = moment().format('dddd, MMMM D, YYYY h:mm:ss a');
    const [currentTime, setCurrentTime] = useState(time);

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(moment().format('dddd, MMMM D, YYYY h:mm:ss a'));
            console.log('Hello');
        }, 1000);
        return () => clearInterval();
    }, [time])

    return (
        <div className='flex flex-col items-center pt-10 pb-8'>
            <img className='w-auto h-full' src={logo} alt="Dranon News" />
            <p className='text-c-dark-200 text-center mt-3 mb-1 md:text-lg md:mt-5 md:mb-2.5'>Journalism Without Fear or Favour</p>
            <p className='text-c-dark-300 text-center md:text-xl'>{currentTime}</p>
        </div>
    );
};

export default Header;