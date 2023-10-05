
import LoginForm from "../../layouts/LoginForm/LoginForm";
import Navbar from "../../layouts/Navbar/Navbar";

const Login = () => {
    return (
        <div className="bg-[#F3F3F3] pb-10">
            <div className="c-container">
                <div className="py-5">
                    <Navbar />
                </div>
                <div className="w-[50%] mx-auto p-10 m-10 bg-white">
                    <h3 className="text-3xl text-center font-semibold mb-5 text-c-dark-300">Login your account</h3>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default Login;