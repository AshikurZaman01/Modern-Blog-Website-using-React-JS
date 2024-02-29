import { useEffect, useState } from "react";
import LBlog from "./LBlog";

const LatestBlog = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogsData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);


    return (
        <div>
            <div>
                <h1 className="text-3xl font-semibold mb-5">Latest Blog</h1>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {
                    blogs.slice(0, 5).map((blog) => <LBlog key={blog.id} blog={blog}></LBlog>)
                }
            </div>
        </div>
    );
};

export default LatestBlog;