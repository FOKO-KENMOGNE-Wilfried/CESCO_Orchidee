

function Contact_us(){

    return(
        <div className="h-full pb-16">

            <div className="bg-gray-500 h-96">
                {/* <img src="" alt="structure" /> */}
                <p className="absolute top-64 left-20 text-white text-2xl font-bold">Contactez-nous</p>
            </div>
            <div className="flex justify-around pt-32">

                <div className="flex flex-col gap-4">

                    <div>
                        <h1 className="font-bold">Localisation</h1>
                        <div className="flex gap-4">
                            <img src="" alt="location" className="flex" />
                            <p>NODGPASSI II - Bon-Blanc</p>
                        </div>
                        <div className="flex gap-4">
                            <img src="" alt="email"  className="flex" />
                            <p>email@gmail.com</p>
                        </div>
                        <div className="flex gap-4">
                            <img src="" alt="number" />
                            <p>+237 699887088 / +237 677003892</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold">Heures d'ouvertures</h1>
                        <p>Nous sommes ouvert 24h/24 et 7J/7</p>
                    </div>

                </div>
                <div>
                    <h1 className="font-bold">Des questions ? Ecrivez-nous</h1>
                    <form action="" className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            <input type="text" placeholder="Nom" className="border-2 border-black rounded-md h-8 pl-4" />
                            <input type="text" placeholder="Prenom" className="border-2 border-black rounded-md h-8 pl-4" />
                        </div>
                        <div className="flex gap-2">
                            <input type="email" placeholder="Email" className="border-2 border-black rounded-md h-8 pl-4" />
                            <input type="number" placeholder="Numero de Telephone" className="border-2 border-black rounded-md h-8 pl-4" />
                        </div>
                        <div>
                            <textarea name="message" id="message" placeholder="Message" className="border-2 border-black rounded-md w-full h-32"></textarea>
                        </div>
                        <div className=" bg-primary text-white p-2 rounded-lg font-bold text-center">
                            <input type="submit" value="Envoyer" />
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Contact_us;