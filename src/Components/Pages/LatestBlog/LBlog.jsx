import { FaArrowRight } from "react-icons/fa";

const LBlog = ({ blog }) => {

    const { id, title, image, content, category, author, authorPic, published_date, reading_time, tags } = blog || {};

    return (
        <div>
            <div>
                <h1 className="font-semibold text-gray-500">{title}</h1>
                <button className="inline-flex items-center gap-2 font-black underline">Read More <span><FaArrowRight /></span></button>
            </div>
        </div>
    );
};

export default LBlog;