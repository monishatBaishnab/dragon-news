import NewsCard from "../../components/NewsCard/NewsCard";
import useFetchNews from "../../hooks/useFetchNews";

const NewsContainer = () => {
    const allNews = useFetchNews();
    console.log(allNews);
    return (
        <div>
            {
                allNews.map(news => <NewsCard key={news._id} news={news} />)
            }
        </div>
    );
};

export default NewsContainer;