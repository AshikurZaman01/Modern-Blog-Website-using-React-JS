import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-gray-900">
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
                <div>
                    <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4 pb-10">
                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Category</p>

                            <ul className="mt-2 space-y-2 ">
                                <li><Link className="text-gray-500 transition-colors duration-300 hover:text-orange-500 ">News</Link></li>

                                <li><Link className="text-gray-500 transition-colors duration-300 hover:text-orange-500 ">World</Link></li>

                                <li><Link className="text-gray-500 transition-colors duration-300 hover:text-orange-500 ">Games</Link></li>


                                <li><Link className="text-gray-500 transition-colors duration-300 hover:text-orange-500 ">References</Link></li>

                            </ul>
                        </div>

                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Apples</p>

                            <ul className="mt-2 space-y-2 ">
                                <li><Link className="text-gray-500 transition-colors duration-300 hover:text-orange-500 ">Web</Link></li>

                                <li><Link className="text-gray-500 transition-colors duration-300 hover:text-orange-500 ">eCommerce</Link></li>

                                <li><Link className="text-gray-500 transition-colors duration-300 hover:text-orange-500 ">Business</Link></li>


                                <li><Link className="text-gray-500 transition-colors duration-300 hover:text-orange-500 ">Entertainment</Link></li>

                            </ul>
                        </div>

                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Chery</p>

                            <ul className="mt-2 space-y-2 ">
                                <li><Link className="text-gray-500 transition-colors duration-300 hover:text-orange-500 ">Media</Link></li>

                                <li><Link className="text-gray-500 transition-colors duration-300 hover:text-orange-500 ">Brochure</Link></li>

                                <li><Link className="text-gray-500 transition-colors duration-300 hover:text-orange-500 ">Nonprofit</Link></li>


                                <li><Link className="text-gray-500 transition-colors duration-300 hover:text-orange-500 ">Projects</Link></li>

                            </ul>
                        </div>

                        <div>
                            <p className="font-medium tracking-wide text-gray-300">Merry</p>

                            <ul className="mt-2 space-y-2 ">
                                <li><Link className="text-gray-500 transition-colors duration-300 hover:text-orange-500 ">Media</Link></li>

                                <li><Link className="text-gray-500 transition-colors duration-300 hover:text-orange-500 ">Brochure</Link></li>

                                <li><Link className="text-gray-500 transition-colors duration-300 hover:text-orange-500 ">Nonprofit</Link></li>


                                <li><Link className="text-gray-500 transition-colors duration-300 hover:text-orange-500 ">Projects</Link></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;