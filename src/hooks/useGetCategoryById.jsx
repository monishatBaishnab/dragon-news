
import useFetchCategories from "./useCategories";

const useGetCategoryById = (inputId) => {
    const categories = useFetchCategories();
    // const [filterCategory, setFilterCategory] = useState(null);
    const filterCategory = categories.find(category => category.id === inputId);
    return filterCategory;
};

export default useGetCategoryById;