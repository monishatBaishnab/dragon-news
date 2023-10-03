import useGetCategoryById from "../../hooks/useGetCategoryById";
import PropTypes from 'prop-types';

const SIngleNews = ({ fnews }) => {
    const { category_id, title, author, image_url } = fnews || {};
    const category = useGetCategoryById(category_id);
    const { published_date } = author;
    return (
        <div>
            <div className="w-full h-auto mb-4">
                <img src={image_url} alt="" />
            </div>
            <div>
                <h4>{title}</h4>
            </div>
            <div className="flex items-center gap-3 text-sm mt-2">
                <span>{category?.name}</span>
                <span className="text-[#9F9F9F]">{published_date.slice(0, 10)}</span>
            </div>
        </div>
    );
};

SIngleNews.propTypes = {
    fnews: PropTypes.object,
}

export default SIngleNews;