import { BsFacebook, BsGithub, BsGoogle, BsInstagram, BsTwitter } from 'react-icons/bs';
import swimming from '../../assets/images/qZone1.png'
import swimming1 from '../../assets/images/qZone2.png'
import swimming2 from '../../assets/images/qZone3.png'

const RightSideBar = () => {
    return (
        <div className='sticky top-5 max-h-screen overflow-scroll '>
            <div>
                <h3 className='text-2xl font-semibold mb-7'>Login With</h3>
                <button className='px-4 py-2 rounded-md border border-blue-500 flex items-center w-full justify-center gap-2 text-blue-500'><BsGoogle />Login with Google</button>
                <button className='px-4 py-2 rounded-md border flex items-center w-full justify-center gap-2 text-c-dark-300 mt-4'><BsGithub />Login with Github</button>
            </div>
            <div>
                <h3 className='text-2xl font-semibold my-7'>Find Us On</h3>
                <ul className='border rounded-md'>
                    <li className='flex items-center text-c-dark-300 gap-2 px-4 py-3 border-b'><BsFacebook />Facebook</li>
                    <li className='flex items-center text-c-dark-300 gap-2 px-4 py-3 border-b'><BsInstagram />Instagram</li>
                    <li className='flex items-center text-c-dark-300 gap-2 px-4 py-3'><BsTwitter />Twitter</li>
                </ul>
            </div>
            <div>
                <h3 className='text-2xl font-semibold my-7'>Q-Zone</h3>
                <div className=''>
                    <img src={swimming} alt="" />
                </div>
                <div className='mt-5'>
                    <img src={swimming2} alt="" />
                </div>
                <div className='mt-5'>
                    <img src={swimming1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;