import { Link, NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineBars } from "react-icons/ai";
import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = [
        { id: 1, name: 'Home', Path: '/' },
        { id: 2, name: 'About', Path: '/about' },
        { id: 3, name: 'Blogs', Path: '/blogs' },
        { id: 4, name: 'Contact', Path: '/contact' },
        { id: 5, name: 'Service', Path: '/services' },
    ]


    return (
        <div>

            <header className="bg-black text-white fixed top-0 right-0 left-0">
                <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between">
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


                    {/* mobile menu btn */}
                    <div className="text-white md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer">
                            {
                                isMenuOpen ? <FaWindowClose className="w-5 h-5" />
                                    :
                                    <AiOutlineBars className="w-5 h-5" />

                            }

                        </button>
                    </div>
                    {/* mobile menu btn */}
                </nav>

                <div>
                    <ul className={`md:hidden gap-12 text-lg px-4 py-6 mt-14 bg-white  block space-y-4 ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                        {
                            navItems.map((item, indx) => {
                                return (
                                    <li key={indx} className="text-black">
                                        <NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} to={item.Path}>{item.name}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </header>

        </div>
    );
};

export default Navbar;