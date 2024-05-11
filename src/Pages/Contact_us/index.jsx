import mail from "../../assets/images/mail1.svg";
import number from "../../assets/images/phone.png";
import position from "../../assets/images/position.svg";

function Contact_us(){

    return(
        <div className="min-h-screen pb-16">

            <div className="bg-gray-500 h-head flex flex-col justify-end items-center pb-10 image">
                <p className="text-white text-2xl font-bold">Contactez-nous</p>
            </div>
            <div className="flex justify-around flex-wrap gap-20 pt-32 screen1:flex-col screen1:items-center screen1:gap-8">

                <div className="flex flex-col gap-4 screen1:text-center pl-4 pr-4">

                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold mb-4 text-2xl">Localisation</h1>
                        <div className="flex gap-4 items-center">
                            <img src={position} alt="location" className="w-10 h-10 -ml-2" />
                            <p>NODGPASSI II - Bon-Blanc</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <img src={mail} alt="email"  className="w-7 h-7" />
                            <p>email@gmail.com</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <img src={number} alt="number" className="w-7 h-7" />
                            <p>+237 699887088 / +237 677003892</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold mb-4 mt-8 text-2xl">Heures d'ouvertures</h1>
                        <p>Nous sommes ouvert 24h/24 et 7J/7</p>
                    </div>

                </div>

                <div className="screen1:text-center">
                    <h1 className="font-bold pb-4 text-2xl mt-4">Des questions ? Ecrivez-nous</h1>
                    <form action="" className="flex flex-col gap-2 w-full screen1:pl-4 pr-4">
                        <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                            <input type="text" placeholder="Nom" className="border-2 border-black w-full rounded-md h-8 pl-4" />
                            <input type="text" placeholder="Prenom" className="border-2 border-black w-full rounded-md h-8 pl-4" />
                        </div>
                        <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                            <input type="email" placeholder="Email" className="border-2 border-black w-full rounded-md h-8 pl-4" />
                            <input type="number" placeholder="Numero de Telephone" className="border-2 w-full border-black rounded-md h-8 pl-4" />
                        </div>
                        <div>
                            <textarea name="message" id="message" placeholder="Message" className="border-2 pl-4 border-black rounded-md w-full h-32"></textarea>
                        </div>
                        <div className=" bg-primary text-white p-2 rounded-lg font-bold text-center">
                            <input type="submit" value="Envoyer" />
                        </div>
                    </form>
                </div>

                <div className=" w-full flex justify-center items-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.9814578921055!2d9.76196607616387!3d4.024191495949552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d0055242ebf%3A0xdfc0468e219fa655!2sCentre%20Hospitalier%20CESCO!5e0!3m2!1sen!2scm!4v1715457761128!5m2!1sen!2scm" width="80%" height="600" style={{border:0}} onTouchStart={(e) => {
                        e.preventDefault();
                    }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>

        </div>
    )
}

export default Contact_us;