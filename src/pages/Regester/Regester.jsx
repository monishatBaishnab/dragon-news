
import Navbar from "../../layouts/Navbar/Navbar";
import RegesterForm from "../../layouts/RegesterForm/RegesterForm";

const Regester = () => {
    return (
        <div className="bg-[#F3F3F3] pb-10">
            <div className="c-container">
                <div className="py-5">
                    <Navbar />
                </div>
                <div className="w-[50%] mx-auto p-10 m-10 bg-white">
                    <h3 className="text-3xl text-center font-semibold mb-5 text-c-dark-300">Register your account</h3>
                    <RegesterForm />
                </div>
            </div>
        </div>
    );
};

export default Regester;