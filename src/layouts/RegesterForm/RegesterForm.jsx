import { Link } from "react-router-dom";
import FormInput from "../../components/Form/FormInput";
import toast, { Toaster } from 'react-hot-toast';
import useGetContext from "../../hooks/useGetContext";

const RegesterForm = () => {
    const errorNotify = () => toast.error('Please Check tarms & conditions.');

    const { regester, updateUser } = useGetContext();

    // const successNotify = () => toast.success('Regestration Success.');
    const handleRegester = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        const condition = form.get('condition');
        console.log(name);
        if (condition !== null) {
            console.log(email, password, name, photo, condition);
            regester(email, password)
                .then((res) => {
                    console.log(res);
                    updateUser(name, photo)
                        .then()
                        .catch(err => console.log(err))
                })
                .catch(err => {
                    console.log(err.message);
                })
        } else {
            // console.log('Plase check tarms and Condition');
            errorNotify();
        }
    }
    return (
        <div>
            <form onSubmit={handleRegester}>
                <FormInput title={'Your Name'} htmlFor='name' type="text" name="name" id="name" placeholder="Enter your name" />
                <FormInput title={'Photo URL'} htmlFor='photo' type="text" name="photo" id="photo" placeholder="Enter your photo URL" />
                <FormInput title={'Email address'} htmlFor='email' type="text" name="email" id="email" placeholder="Enter your email address" />
                <FormInput title={'Password'} htmlFor='password' type="password" name="password" id="password" placeholder="Enter your password" />
                <span className="flex mt-4 gap-1"><input type="checkbox" name="condition" id="condition" /> <label className="text-c-dark-300" htmlFor="condition">Accept Term & Conditions</label></span>
                <button className="bg-c-dark-300 w-full px-4 py-2 rounded-md text-white mt-6">Regester</button>
                <p className="mt-5 text-c-dark-300">You already Have An Account ? <Link to='/login' className="text-c-pink">Login now</Link></p>
            </form>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </div>
    );
};

export default RegesterForm;