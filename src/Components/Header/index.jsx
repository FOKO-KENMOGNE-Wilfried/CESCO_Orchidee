import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.jpg";

function Header(){

    return(
        <div className=" flex justify-center mt-8">
            <div className=" flex justify-between border-2 w-11/12 items-center p-4 rounded-lg">
                <div className=" flex gap-2 items-center">
                    <img src={logo} alt="logo" className=" w-16 h-16" />
                    <p className=" font-bold text-2xl">CESCO</p>
                </div>

                <div className=" flex gap-10">
                    <Link to={"/"} className=" hover:text-yellow-400">Accueil</Link>
                    <Link to={"/about"} className=" hover:text-yellow-400">A propos</Link>
                    <Link to={"/contact_us"} className=" hover:text-yellow-400">Contactez-nous</Link>
                </div>

                <div className=" bg-primary text-white p-2 rounded-lg font-bold">
                    <a href="">Prenez rendez-vous</a>
                </div>
            </div>
        </div>
    )
}

export default Header;