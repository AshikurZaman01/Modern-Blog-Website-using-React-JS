import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Header/Navbar/Navbar';

const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;