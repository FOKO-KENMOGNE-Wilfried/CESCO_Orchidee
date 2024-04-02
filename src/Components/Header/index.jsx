import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.jpg";

function Header(){

    return(
        <div className=" flex justify-center">
            <div className=" flex justify-between bg-white mt-16 w-11/12 items-center p-4 rounded-lg screen1:text-sm screen2:flex-col screen2:gap-10 absolute">
                <div className=" flex gap-2 items-center screen2:flex-col screen2:justify-center">
                    <img src={logo} alt="logo" className=" w-16 h-16" />
                    <p className=" font-bold text-2xl">CESCO</p>
                </div>

                <div className=" flex gap-8 screen2:flex-col screen2:items-center">
                    <Link to={"/"} className=" hover:text-yellow-400">Accueil</Link>
                    <Link to={"/about"} className=" hover:text-yellow-400">A propos</Link>
                    <Link to={"/contact_us"} className=" hover:text-yellow-400">Contactez-nous</Link>
                </div>

                <div className=" bg-primary text-white p-2 rounded-lg font-bold text-center">
                    <a href="">Prenez rendez-vous</a>
                </div>
            </div>
        </div>
    )
}

export default Header;