
import { Link, useLocation, useNavigate } from "react-router-dom";
import FormInput from "../../components/Form/FormInput";
import toast, { Toaster } from 'react-hot-toast';
import useGetContext from "../../hooks/useGetContext";

const LoginForm = () => {
    const errorNotify = () => toast.error('Please Check tarms & conditions.');
    const successNotify = () => toast.success('Login Success.');

    const location = useLocation();

    const navigate = useNavigate();
    const { logIn,logInWithGoogle } = useGetContext();

    const handleLogin = (e) => {

        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        if (email && password) {
            successNotify();
            logIn(email, password)
            .then(res => {
                console.log(res.user);
            })
            .catch(err => {
                console.log(err.message);
            })
            location.state !== null ? navigate(location.state) : navigate('/');
        }
        else {
            errorNotify();
        }
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <FormInput title={'Email address'} htmlFor='email' type="text" name="email" id="email" placeholder="Enter your email address" />
                <FormInput title={'Password'} htmlFor='password' type="password" name="password" id="password" placeholder="Enter your password" />
                <button className="bg-c-dark-300 w-full px-4 py-2 rounded-md text-white mt-6">Login</button>
                <p className="mt-5 text-c-dark-300">Donot Have An Account ? <Link to='/regester' className="text-c-pink">Register</Link></p>
            </form>
            <div className="flex gap-2 mt-5">
                <button onClick={() => logInWithGoogle().then(res => console.log(res.user)).catch(err => console.log(err))} className="px-5 py-2 bg-c-pink text-white rounded-md w-full">Login With Google</button>
                <button className="px-5 py-2 bg-c-pink text-white rounded-md w-full">Login With Google</button>
            </div>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default LoginForm;