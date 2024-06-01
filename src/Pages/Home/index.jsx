import "./index.css";
import bg from "../../assets/bg.jpg";
import Card from "./Card";
import exp from "../../assets/exp.svg";
import { NavLink } from "react-router-dom";
import CardDepartment from "./CardDepartment";

import chirurgie from "../../assets/services/chirurgie.png"
import dentiste from "../../assets/services/dentiste.png"
import echo from "../../assets/services/echo.png"
import gyneco from "../../assets/services/gyneco.png"
import kinesitherapie from "../../assets/services/Kinesitherapies.png"
import labo from "../../assets/services/labo.png"
import ophta from "../../assets/services/ophta.png"
import pediatrie from "../../assets/services/pediatrie.png"
import pharma from "../../assets/services/pharma.png"
import medecine from "../../assets/services/medecine.jpg"

function Home(){

    return(
        <div className="min-h-screen pb-16">

            <div className="relative -z-10 bg-gray-500 h-head flex flex-col justify-end items-center pb-10 overflow-hidden image">
                <p className="text-white text-4xl font-bold absolute top-96">Accueil</p>
            </div>
            <div className="w-full p-10 flex flex-col gap-32 justify-center items-center -mt-32">

                <div className="py-6 flex justify-center items-center gap-8 flex-wrap w-9/12 formres:w-full px-10 border border-gray-400 rounded-md bg-white">

                    <Card info1={"Ouvert 24h/24 et 7j/7"} info2={"Nous sommes ouverts et a votre ecoute en permanace"} bg={bg} />
                    <Card info1={"Une medecine de qualite"} info2={"Nous disposons de medecins talentueux et agueris"} bg={bg} />
                    <Card info1={"Des equipements a la pointe"} info2={"Nous disposons d'equipements moderne pour plus de precision et de fiabilite"} bg={bg} />

                </div>

                <div className="w-9/12 flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-20">
                    <img className="w-96 rounded-md" src={exp} alt="image" />
                    <div className="flex flex-col justify-between items-start gap-8">
                        <h1 className="text-3xl font-bold text-center sm:text-left">De nombreuses annees d'experiences</h1>
                        <p className="text-center sm:text-left">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, animi! Doloribus voluptatibus ipsa ab illo reiciendis, obcaecati asperiores nesciunt tenetur!</p>
                        <div className=" bg-primary text-white p-2 rounded-lg font-bold text-center flex justify-center items-center w-full sm:w-fit">
                            <NavLink to={"/about"}>A propos de nous</NavLink>
                        </div>
                    </div>
                </div>

                <div className="w-screen text-white bg-secondary p-10 flex justify-center sm:justify-between items-center flex-wrap gap-y-16">
                    <div className="flex justify-center items-center sm:items-start flex-col gap-y-4">
                        <p className="text-3xl font-bold">CESCO</p>
                        <p className="text-center sm:text-left">En cas de probleme de sante vous pouvez nous contactez notre equipe est a votre dispositions</p>
                    </div>
                    <div className=" bg-primary text-white p-2 rounded-lg font-bold text-center">
                        <NavLink to={"/contact_us"}>Contactez-nous</NavLink>
                    </div>
                </div>

                <div className="w-9/12 flex flex-col gap-16">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-3xl font-bold text-center">Nos departements</h1>
                        <div className="border-primary border-2 h-0 w-32 mt-4"></div>
                        <p className="mt-10 text-center">Nous disposons d'une variete de departements nous permettants de repondre aux besoins de nos patiens</p>
                    </div>
                    <div className="flex flex-wrap gap-y-8 justify-center gap-4">

                        <CardDepartment name={"Medecine generale"} desc={""} img={medecine}/>
                        <CardDepartment name={"Chirurgie"} desc={""} img={chirurgie}/>
                        <CardDepartment name={"Pharmacie"} desc={""} img={pharma}/>
                        <CardDepartment name={"Gynecoligie"} desc={""} img={gyneco}/>
                        <CardDepartment name={"Ophtamologie"} desc={""} img={ophta}/>
                        <CardDepartment name={"Echographie"} desc={""} img={echo}/>
                        <CardDepartment name={"Pediatrie"} desc={""} img={pediatrie}/>
                        <CardDepartment name={"Laboratoire"} desc={""} img={labo}/>
                        <CardDepartment name={"Dentiste"} desc={""} img={dentiste}/>
                        <CardDepartment name={"Kinisitherapie"} desc={""} img={kinesitherapie}/>

                    </div>
                </div>

                <div className="w-screen text-white bg-secondary p-10 flex justify-center sm:justify-between items-center flex-wrap gap-y-16">
                    <div className="w-full flex flex-col gap-10 justify-center items-center">
                        <p className=" text-3xl font-bold formres:text-center">Prenez rendez-vous</p>
                        <form action="" className=" formres:w-full flex flex-col gap-2 w-form justify-center items-center screen1:pl-4 pr-4">
                            <div className="flex gap-2 flex-wrap w-full justify-center sm:justify-between">
                                <input type="text" placeholder="Nom" className="border border-black rounded-md h-8 pl-4 w-72 formres:w-full" />
                                <input type="text" placeholder="Prenom" className="border border-black rounded-md h-8 pl-4 w-72 formres:w-full" />
                            </div>
                            <div className="flex gap-2 w-full flex-wrap justify-center sm:justify-between">
                                <input type="email" placeholder="Email" className="border border-black rounded-md h-8 pl-4 w-72 formres:w-full" />
                                <input type="number" placeholder="Numero de Telephone" className="border border-black w-72 rounded-md h-8 pl-4 formres:w-full" />
                            </div>
                            <div className="w-full">
                                <textarea name="message" id="message" placeholder="Message" className="border pl-4 border-black rounded-md h-32 w-full"></textarea>
                            </div>
                            <div className=" bg-primary text-white p-2 rounded-lg font-bold text-center">
                                <input type="submit" value="Envoyer" />
                            </div>
                        </form>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home;