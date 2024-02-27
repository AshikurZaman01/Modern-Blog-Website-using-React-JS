import { Link, NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {

    const navItems = [
        { id: 1, name: 'Home', Path: '/' },
        { id: 2, name: 'About', Path: '/about' },
        { id: 3, name: 'Blogs', Path: '/blogs' },
        { id: 4, name: 'Contact', Path: '/contact' },
        { id: 5, name: 'Service', Path: '/services' },
    ]

    return (
        <div>

            <header className="bg-black ">
                <nav className="px-4 py-4 flex justify-between">
                    <Link to={'/'}><h1 className="text-xl font-bold text-white">Blogs<span className="text-orange-500">BD</span></h1></Link>

                    {/* nav list */}
                    <ul className="md:flex gap-12 text-lg hidden">
                        {
                            navItems.map((item, indx) => {
                                return (
                                    <li key={indx} className="text-white">
                                        <NavLink to={item.Path}>{item.name}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    {/* nav list */}

                    {/* emnu icons */}
                    <div className="text-white lg:flex gap-4 items-center  hidden ">
                        <Link to={'/'} className="hover:text-orange-500 text-2xl"><FaFacebookF /></Link>
                        <Link to={'/'} className="hover:text-orange-500 text-2xl"><FiDribbble /></Link>
                        <Link to={'/'} className="hover:text-orange-500 text-2xl"><FaInstagram /></Link>
                        <button className="bg-orange-500 px-6  py-2 font-medium  rounded hover:bg-white  hover:text-orange-500 transition-all duration-200 ease-in ">Log In</button>
                    </div>
                    {/* emnu icons */}

                </nav>
            </header>

        </div>
    );
};

export default Navbar;