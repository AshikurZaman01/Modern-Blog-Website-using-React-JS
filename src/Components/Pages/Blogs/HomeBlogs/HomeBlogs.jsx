import { useEffect, useState } from "react";
import Blog from "../Blog";

const HomeBlogs = () => {

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
            {/* Blogs */}
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-10 transition-all duration-200">
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

export default HomeBlogs;