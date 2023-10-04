import LeftSideBar from "../LeftSideBar/LeftSideBar";
import NewsContainer from "../NewsContainer/NewsContainer";
import RightSideBar from "../RightSideBar/RightSideBar";

const HomeMain = () => {
    return (
        <div className="grid gap-5 grid-cols-2 md:grid-cols-4 py-10">
            <div className="col-span-2 md:col-span-1">
                <LeftSideBar />
            </div>
            <div className="col-span-2 md:col-span-2">
                <NewsContainer />
            </div>
            <div className="col-span-2 md:col-span-1">
                <RightSideBar />
            </div>
        </div>
    );
};

export default HomeMain;