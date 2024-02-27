import { TbUserSquareRounded } from "react-icons/tb";

const Blog = ({ blog }) => {

    const { id, title, image, content, category, author, authorPic, published_date, reading_time, tags } = blog || {};
    console.log(blog)
    return (
        <div className="shadow-md shadow-gray-500">
            <div>
                <img className="w-full rounded" src={image} alt="" />
            </div>
            <div className="pb-10 px-5 ">
                <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">{title}</h3>
                <p className="mb-2 flex items-center gap-2 text-gray-500 "><TbUserSquareRounded className="text-black" />{author}</p>
                <p className="text-sm text-gray-500 translate-x-6">Published : {published_date}</p>
            </div>
        </div>
    );
};

export default Blog;