import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-black text-white shadow sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                <h1 className="text-2xl font-extrabold tracking-tight">Max Rivera</h1>
                <ul className="flex space-x-6 text-sm uppercase tracking-wide font-medium">
                    <li><Link to="/" className="hover:text-gray-300 transition">Home</Link></li>
                    <li><Link to="/about" className="hover:text-gray-300 transition">About</Link></li>
                    <li><Link to="/projects" className="hover:text-gray-300 transition">Projects</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-300 transition">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
