import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogsData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [pageSize, setPageSize] = useState(10);
    const [showAll, setShowAll] = useState(false);

    const allCategories = [...new Set(blogs.map(blog => blog.category))];

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };


    return (
        <div>
            <div className="py-40 bg-black text-center text-white px-4 ">
                <h1 className="text-5xl lg:text-7xl font-bold leading-snug mb-5">Blog Page</h1>
            </div>

            {/* category btn */}
            <div className="flex justify-center items-center mt-8 space-x-4">
                <button
                    className={`btn ${selectedCategory === null ? 'bg-orange-500 text-black' : 'bg-black text-orange-500'} hover:bg-orange-500 hover:text-black`}
                    onClick={() => handleCategorySelect(null)}
                >
                    All
                </button>
                {allCategories.map((category, index) => (
                    <button
                        key={index}
                        className={`btn ${selectedCategory === category ? 'bg-orange-500 text-black' : 'bg-black text-orange-500'} hover:bg-orange-500 hover:text-black`}
                        onClick={() => handleCategorySelect(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            {/* category btn */}


            {/* Blogs */}
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-20 transition-all duration-200">
                    {blogs
                        .filter(blog => selectedCategory === null || blog.category === selectedCategory)
                        .slice(0, pageSize)
                        .map((blog) => <Blog key={blog.id} blog={blog}></Blog>)
                    }
                </div>

                {
                    blogs.filter(blog => selectedCategory === null || blog.category === selectedCategory).length > pageSize && !showAll && (
                        <div className="flex justify-center my-10">
                            <button onClick={() => setPageSize(pageSize + 5)} className="btn btn-md bg-black text-orange-500 hover:bg-orange-500 hover:text-black">Show More</button>
                        </div>
                    )
                }
            </div>
            {/* End Blogs */}
        </div>
    );
};

export default Blogs;
