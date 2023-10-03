import { useEffect, useState } from "react";

const useFetchNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('/public/news.json')
            .then(res => res.json())
            .then(items => setNews(items));
    }, [])

    return news;

};

export default useFetchNews;