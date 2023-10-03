import useFetchCategories from "../../hooks/useCategories";
import useFetchNews from "../../hooks/useFetchNews";
import Category from "./Category";
import SIngleNews from "./SIngleNews";

const LeftSideBar = () => {
    const categories = useFetchCategories();
    const news = useFetchNews();
    const filterNews = news.filter(fnews => fnews?.others_info?.is_todays_pick === true);

    return (
        <div>
            <h4 className="text-xl text-c-dark-300 font-medium mb-5">All Caterogy</h4>
            <ul>
                {
                    categories.map(category => <Category key={category.id} name={category.name} />)
                }
            </ul>
            
            <div className="mt-5">
                {
                    filterNews.map(fnews => <SIngleNews key={fnews._id} fnews={fnews} />)
                }
            </div>
        </div>
    );
};

export default LeftSideBar;