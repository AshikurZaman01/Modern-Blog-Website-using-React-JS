import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import HomeBlogs from "../Blogs/HomeBlogs/HomeBlogs";
import Banner from "../Header/Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <div className="max-w-7xl mx-auto grid grid-cols-4">

                <section className="col-span-3">
                    <HomeBlogs></HomeBlogs>
                </section>
                <section className="col-span-1 bg-blue-500">B</section>

            </div>
        </div>
    );
};

export default Home;