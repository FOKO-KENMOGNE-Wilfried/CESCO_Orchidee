import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.jpg";
import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";

function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 text-sm text-center">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-cyan-300" />
                        <span>+237 699 887 088</span>
                    </div>
                    <p>Ouvert du Lundi au Dimanche, 24h/24</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link
                    to="/"
                    className="flex items-center gap-3 group"
                >
                    <img
                        src={logo}
                        alt="Logo CESCO"
                        className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        CESCO
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link
                        to="/"
                        className="relative text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Accueil
                    </Link>
                    <Link
                        to="/about"
                        className="relative text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        À propos
                    </Link>
                    <Link
                        to="/contact_us"
                        className="relative text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Contactez-nous
                    </Link>
                </nav>

                <Link
                    to="/appointment"
                    className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                    <FaCalendarAlt />
                    Prenez rendez-vous
                </Link>

                <button className="md:hidden text-gray-700 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div className="md:hidden bg-white border-t border-gray-200 px-4 py-3 hidden">
                <div className="flex flex-col gap-4">
                    <Link
                        to="/"
                        className="text-gray-700 font-medium hover:text-blue-600 px-3 py-2 rounded hover:bg-gray-50"
                    >
                        Accueil
                    </Link>
                    <Link
                        to="/about"
                        className="text-gray-700 font-medium hover:text-blue-600 px-3 py-2 rounded hover:bg-gray-50"
                    >
                        À propos
                    </Link>
                    <Link
                        to="/contact_us"
                        className="text-gray-700 font-medium hover:text-blue-600 px-3 py-2 rounded hover:bg-gray-50"
                    >
                        Contactez-nous
                    </Link>
                    <Link
                        to="/appointment"
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-bold mt-2"
                    >
                        <FaCalendarAlt />
                        Rendez-vous
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;