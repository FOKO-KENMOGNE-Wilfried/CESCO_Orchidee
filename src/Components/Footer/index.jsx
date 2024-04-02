import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.jpg";
import mail from "../../assets/images/mail.svg";
import phone from "../../assets/images/phone.svg";

function Footer(){

    return(
        <div className=" flex flex-col gap-10 items-center w-full footer1:text-sm">
            <div className="flex w-full justify-around screen2:flex-col screen2:items-center screen2:gap-8">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2 screen2:flex-col">
                        <img src={logo} alt="logo" className="w-10 h-10" />
                        <p className="font-bold text-xl">CESCO</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet, <br />consectetur adipisicing elit. <br /> Nobis, rerum.</p>
                </div>
                <div className="flex flex-col gap-8 items-center">
                    <h1 className="text-2xl font-bold">Liens Rapide</h1>
                    <Link to={"/"}>Accueil</Link>
                    <Link to={"/about"}>A propos</Link>
                    <Link to={"/contact_us"}>Contactez-nous</Link>
                </div>
                <div className="flex flex-col gap-4 screen2:items-center">
                    <h1 className="pb-4 text-2xl font-bold">Contacts</h1>
                    <p>Lorem ipsum, dolor sit amet <br /> consectetur adipisicing elit. <br /> Eius, brconsectetur?</p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <img src={phone} alt="phone" className="w-10 h-10" />
                            <div>
                                <p>+237 699887088</p>
                                <p>+237 677003892</p>
                            </div>
                        </div>
                            <a href="mailto:email@gmail.com">
                                <div className="flex gap-4 items-center">
                                    <img src={mail} alt="mail" className="w-10 h-10" />
                                    <p>email@email.com</p>
                                </div>
                            </a>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4 pb-4 footer2:flex-col">
                <div>
                    copyright@2024 - CESCO
                </div>
                <div className="flex flex-col border-l-2 border-black pl-4 footer2:border-l-0 footer2:border-t-2  footer2:pt-4">
                    <p>Coded by FOKO Wilfried</p>
                    <p>fokowilfried7@gmail.com</p>
                </div>
            </div>

        </div>
    )
}

export default Footer;