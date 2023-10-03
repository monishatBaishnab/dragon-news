import Marquee from "react-fast-marquee";

const Slider = () => {
    return (
        <div className="flex items-center bg-[#F3F3F3] p-3 mb-4">
            <button className="px-7 py-2 bg-c-pink text-white mr-3">Latest</button>
            <Marquee>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    );
};

export default Slider;