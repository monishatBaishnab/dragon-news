import { Link, useParams } from "react-router-dom";
import useFetchNews from "../../hooks/useFetchNews";
import Header from "../../layouts/Header/Header";
import RightSideBar from "../../layouts/RightSideBar/RightSideBar";
import { FiArrowLeft } from 'react-icons/fi'
import { AiOutlineHome } from "react-icons/ai";

const NewsDetails = () => {
    const { newsId } = useParams();
    const allNews = useFetchNews();
    const news = allNews.find(fnews => fnews._id === newsId);
    const { title, image_url, details } = news || {};

    return (
        <div>
            <Header />
            <div className="grid gap-5 grid-cols-1 md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-3xl font-semibold text-c-dark-300 mb-8">Dragon News</h2>
                    <div className="p-5 border">
                        <div >
                            <img src={image_url} alt="" />
                        </div>
                        <h3 className='text-xl mt-5 text-c-dark-300 font-medium mb-5'>{title}</h3>
                        <p>{details}</p>
                        <div className="mt-5 flex gap-2">
                            <button className="px-4 py-2 bg-c-pink text-white flex items-center gap-2"><FiArrowLeft className="text-xl" /> All News in this category</button>
                            <Link to='/' className="px-4 py-2 bg-c-pink text-white flex items-center gap-2"><AiOutlineHome className="text-xl" /> Go Home</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <RightSideBar />
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;