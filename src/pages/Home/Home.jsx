import Header from "../../layouts/Header/Header";
import HomeMain from "../../layouts/HomeMain/HomeMain";
import Navbar from "../../layouts/Navbar/Navbar";
import Slider from "../../layouts/Slider/Slider";

const Home = () => {
    return (
        <div className="">
            <Header />
            <Slider />
            <Navbar />
            <HomeMain />
        </div>
    );
};

export default Home;