import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.jpg";
import mail from "../../assets/images/mail.svg";
import phone from "../../assets/images/phone.svg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white pt-12 pb-6 px-4 md:px-8 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-10">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4">
                            <img src={logo} alt="logo" className="w-12 h-12 rounded-lg shadow-lg" />
                            <p className="font-bold text-2xl text-white">CESCO</p>
                        </div>
                        <p className="text-gray-200">
                            Votre partenaire de confiance pour des solutions innovantes et des services de qualité.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-white hover:text-[#68DBFF] transition-colors duration-300">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-[#68DBFF] transition-colors duration-300">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-[#68DBFF] transition-colors duration-300">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="text-white hover:text-[#68DBFF] transition-colors duration-300">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h2 className="text-xl font-bold border-b-2 border-[#68DBFF] pb-2 w-max">Liens Rapides</h2>
                        <nav className="flex flex-col gap-3">
                            <Link
                                to="/"
                                className="text-gray-200 hover:text-white transition-colors duration-300 w-max"
                            >
                                Accueil
                            </Link>
                            <Link
                                to="/about"
                                className="text-gray-200 hover:text-white transition-colors duration-300 w-max"
                            >
                                À propos
                            </Link>
                            <Link
                                to="/contact_us"
                                className="text-gray-200 hover:text-white transition-colors duration-300 w-max"
                            >
                                Contactez-nous
                            </Link>
                            <Link
                                to="/services"
                                className="text-gray-200 hover:text-white transition-colors duration-300 w-max"
                            >
                                Nos Services
                            </Link>
                        </nav>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h2 className="text-xl font-bold border-b-2 border-[#68DBFF] pb-2 w-max">Contacts</h2>
                        <p className="text-gray-200">
                            Nous sommes disponibles pour répondre à toutes vos questions et préoccupations.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-4">
                                <div className="bg-white p-2 rounded-full">
                                    <img src={phone} alt="phone" className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-medium">+237 699 887 088</p>
                                    <p className="font-medium">+237 677 003 892</p>
                                </div>
                            </div>
                            <a href="mailto:cescoorchidee@gmail.com" className="flex items-center gap-4 hover:text-white">
                                <div className="bg-white p-2 border rounded-full">
                                    <img src={mail} alt="mail" className="min-w-5 min-h-5" />
                                </div>
                                <span className="text-gray-200 hover:text-white transition-colors duration-300">
                                    cescoorchidee@gmail.com
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* <div className="flex flex-col gap-6">
                        <h2 className="text-xl font-bold border-b-2 border-[#68DBFF] pb-2 w-max">Newsletter</h2>
                        <p className="text-gray-200">
                            Abonnez-vous pour recevoir nos dernières actualités et offres spéciales.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#68DBFF] text-white placeholder-gray-300"
                            />
                            <button
                                type="submit"
                                className="bg-[#68DBFF] text-[#257CFF] font-bold py-2 px-6 rounded-lg hover:bg-white transition-colors duration-300 w-max"
                            >
                                S&apos;abonner
                            </button>
                        </form>
                    </div> */}
                </div>

                <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-gray-300 text-sm">
                        © {new Date().getFullYear()} CESCO - Tous droits réservés
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 text-center text-gray-300 text-sm">
                        <Link to="/privacy" className="hover:text-white transition-colors duration-300">
                            Politique de confidentialité
                        </Link>
                        <Link to="/terms" className="hover:text-white transition-colors duration-300">
                            Conditions d&apos;utilisation
                        </Link>
                    </div>
                    <div className="text-gray-300 text-sm text-center md:text-right">
                        <p>Conçu et développé par <span className="text-[#68DBFF]">FOKO Wilfried</span></p>
                        <a href="mailto:fokowilfried7@gmail.com" className="hover:text-white transition-colors duration-300">
                            fokowilfried7@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;