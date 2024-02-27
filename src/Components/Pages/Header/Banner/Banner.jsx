import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="px-4 py-28 bg-black mx-auto">

            <div className="text-white text-center">
                <h1 className="text-5xl lg:text-7xl font-bold leading-snug mb-5">Welcome to Our Blog</h1>
                <p className="text-gray-100 lg:w-3/5 mx-auto mb-5">Start your blog today and join a community of writters and readers who are passionate about sharing their stories and ideas. We offer everything you need to get started, from helpful tips and tutorials.</p>
                <div>
                    <Link to={'/'} className="font-medium hover:text-orange-500 inline-flex items-center gap-2">Learn More <FaLocationArrow /></Link>
                </div>
            </div>



        </div>
    );
};

export default Banner;