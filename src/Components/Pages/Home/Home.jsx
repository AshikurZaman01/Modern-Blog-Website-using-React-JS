import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import HomeBlogs from "../Blogs/HomeBlogs/HomeBlogs";
import Banner from "../Header/Banner/Banner";
import LatestBlog from "../LatestBlog/LatestBlog";

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <div className="max-w-7xl mx-auto grid grid-cols-4">

                <section className="col-span-4 md:col-span-3">
                    <HomeBlogs></HomeBlogs>
                </section>
                <section className="hidden md:block md:col-span-1 mt-8 px-5">
                    <LatestBlog></LatestBlog>
                </section>

            </div>
        </div>
    );
};

export default Home;