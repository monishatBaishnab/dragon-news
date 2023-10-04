import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { BsBookmarks, BsShare } from 'react-icons/bs';
import {AiFillEye} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const NewsCard = ({ news }) => {
    const { _id, rating, total_view, title, author, image_url, details } = news || {};
    const { name, published_date, img } = author || {};
    return (
        <div className='border mb-5'>
            <div className="flex items-center bg-[#F3F3F3] rounded-md mb-4 p-5 justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-6 h-6 overflow-hidden rounded-full">
                        <img src={img} alt={name} />
                    </div>
                    <div>
                        <h5>{(name != null || name != '') ? name : 'Author'}</h5>
                        <span className="text-sm text-c-dark-200">{published_date}</span>
                    </div>
                </div>
                <div className='flex items-center gap-4 text-2xl text-c-dark-200'>
                    <BsBookmarks className='cursor-pointer' />
                    <BsShare className='cursor-pointer' />
                </div>
            </div>
            <div className='m-5 border-b pb-4'>
                <h3 className='text-lg text-c-dark-300 font-medium mb-5'>{title}</h3>
                <div className='h-[262px] w-full overflow-hidden'>
                    <img src={image_url} alt="" />
                </div>
                <p className='mt-5'>{details.length > 200 ? details.slice(0, 200) : details}</p>
                <Link to={`/newsDetails/${_id}`} className='text-c-orange font-medium mt-2'>Reed More</Link>
            </div>
            <div className='m-5 flex justify-between'>
                <div className='flex items-center gap-2'>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rating.number}
                        readOnly
                    />
                    <span className='text-c-dark-200 text-xl'>{rating.number}</span>
                </div>
                <div className='flex gap-1 items-center text-c-dark-200'>
                    <AiFillEye className='text-xl' />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object,
}

export default NewsCard;