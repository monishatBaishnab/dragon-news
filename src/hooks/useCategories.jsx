import { useEffect, useState } from "react";

const useFetchCategories = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/public/categories.json')
            .then(res => res.json())
            .then(items => setData(items));
    }, [])
    return data;
};

export default useFetchCategories;