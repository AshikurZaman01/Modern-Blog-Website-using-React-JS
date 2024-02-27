import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogsData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [pageSize, setPageSize] = useState(10);
    const [showAll, setShowAll] = useState(false);

    return (
        <div>
            <div className="py-40 bg-black text-center text-white px-4 ">
                <h1 className="text-5xl lg:text-7xl font-bold leading-snug mb-5">Blog Page</h1>
            </div>


            {/* Blogs */}
            <div className="max-w-7xl mx-auto">


                <div className="my-5">
                    page category
                </div>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-20 transition-all duration-200">
                    {
                        blogs.slice(0, pageSize).map((blog) => <Blog key={blog.id} blog={blog}></Blog>)
                    }
                </div>

                {
                    !showAll && (
                        <div className="flex justify-center my-10">
                            <button onClick={() => setPageSize(pageSize + 5)} className="btn btn-md bg-black text-orange-500 hover:bg-orange-500 hover:text-black">Show More</button>
                        </div>
                    )
                }
            </div>
            {/* Blogs */}
        </div>
    );
};

export default Blogs;