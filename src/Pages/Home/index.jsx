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

function Home() {
    return (
        <div>

            <div className="min-h-screen pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 h-head flex flex-col justify-center items-center pb-10 overflow-hidden image">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-30'></div>
                    <p className="relative text-white text-4xl font-bold tracking-wide animate-fade-in-up">Accueil</p>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                </div>

                <div className="w-full p-10 flex flex-col gap-32 justify-center items-center -mt-32">
                    <div className="py-8 flex justify-center items-center gap-8 flex-wrap w-11/12 formres:w-full px-10 bg-white/80 backdrop-blur border border-white/20 rounded-2xl shadow-2xl">
                        <Card info1={"Ouvert 24h/24 et 7j/7"} info2={"Nous sommes ouverts et à votre écoute en permanence"} bg={bg} />
                        <Card info1={"Une médecine de qualité"} info2={"Nous disposons de médecins talentueux et aguerris"} bg={bg} />
                        <Card info1={"Des équipements à la pointe"} info2={"Nous disposons d'équipements modernes pour plus de précision et de fiabilité"} bg={bg} />
                    </div>

                    <div className="w-9/12 flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-20 items-center">
                        <div className="relative group">
                            <img className="w-96 rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500" src={exp} alt="image" />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="flex flex-col justify-between items-start gap-8 max-w-lg">
                            <h1 className="text-4xl font-bold text-center sm:text-left bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                De nombreuses années d&apos;expériences
                            </h1>
                            <p className="text-center sm:text-left text-gray-600 leading-relaxed text-lg">
                                Nous disposons de méthodologies solides acquises au fil des années ce qui assure un suivi et un traitement efficace de nos patients
                            </p>
                            <NavLink
                                to={"/about"}
                                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-bold text-center flex justify-center items-center w-full sm:w-fit transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                            >
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                    </svg>
                                    À propos de nous
                                </span>
                            </NavLink>
                        </div>
                    </div>

                    <div className="w-screen text-white bg-gradient-to-r from-blue-700 to-cyan-700 p-10 flex justify-center sm:justify-between items-center flex-wrap gap-y-16 shadow-2xl">
                        <div className="flex justify-center items-center sm:items-start flex-col gap-y-6">
                            <p className="text-4xl font-bold">CESCO</p>
                            <p className="text-center sm:text-left text-xl opacity-90 max-w-md leading-relaxed">
                                En cas de problème de santé vous pouvez nous contacter, notre équipe est à votre disposition
                            </p>
                        </div>
                        <NavLink
                            to={"/contact_us"}
                            className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-center hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        >
                            <span className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                Contactez-nous
                            </span>
                        </NavLink>
                    </div>

                    <div className="w-9/12 flex flex-col gap-16">
                        <div className="flex flex-col justify-center items-center">
                            <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
                                Nos départements
                            </h1>
                            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mb-6"></div>
                            <p className="text-center text-gray-600 text-lg leading-relaxed max-w-2xl">
                                Nous disposons d&apos;une variété de départements nous permettant de répondre aux besoins de nos patients
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-y-8 justify-center gap-6">
                            <CardDepartment name={"Médecine générale"} desc={""} img={medecine} />
                            <CardDepartment name={"Chirurgie"} desc={""} img={chirurgie} />
                            <CardDepartment name={"Pharmacie"} desc={""} img={pharma} />
                            <CardDepartment name={"Gynécologie"} desc={""} img={gyneco} />
                            <CardDepartment name={"Ophtalmologie"} desc={""} img={ophta} />
                            <CardDepartment name={"Échographie"} desc={""} img={echo} />
                            <CardDepartment name={"Pédiatrie"} desc={""} img={pediatrie} />
                            <CardDepartment name={"Laboratoire"} desc={""} img={labo} />
                            <CardDepartment name={"Dentiste"} desc={""} img={dentiste} />
                            <CardDepartment name={"Kinésithérapie"} desc={""} img={kinesitherapie} />
                        </div>
                    </div>

                    <div className="w-screen text-white bg-gradient-to-r from-blue-700 to-cyan-700 p-10 flex justify-center items-center flex-wrap gap-y-16 shadow-2xl">
                        <div className="w-full flex flex-col gap-10 justify-center items-center">
                            <p className="text-4xl font-bold formres:text-center">Prenez rendez-vous</p>
                            <form action="" className="formres:w-full flex flex-col gap-6 md:max-w-[80vw] justify-center items-center screen1:pl-4 pr-4 bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                                <div className="flex gap-4 flex-wrap md:flex-nowrap w-full justify-center sm:justify-between">
                                    <input
                                        type="text"
                                        placeholder="Nom"
                                        className="border-2 border-white/20 bg-white/10 backdrop-blur rounded-xl h-12 pl-4 w-full formres:w-full text-white placeholder-white/70 focus:border-white/50 focus:ring-4 focus:ring-white/10 transition-all duration-300"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Prénom"
                                        className="border-2 border-white/20 bg-white/10 backdrop-blur rounded-xl h-12 pl-4 w-full formres:w-full text-white placeholder-white/70 focus:border-white/50 focus:ring-4 focus:ring-white/10 transition-all duration-300"
                                    />
                                </div>
                                <div className="flex gap-4 w-full flex-wrap  md:flex-nowrap justify-center sm:justify-between">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="border-2 border-white/20 bg-white/10 backdrop-blur rounded-xl h-12 pl-4 w-full formres:w-full text-white placeholder-white/70 focus:border-white/50 focus:ring-4 focus:ring-white/10 transition-all duration-300"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Numéro de téléphone"
                                        className="border-2 border-white/20 bg-white/10 backdrop-blur w-full rounded-xl h-12 pl-4 formres:w-full text-white placeholder-white/70 focus:border-white/50 focus:ring-4 focus:ring-white/10 transition-all duration-300"
                                    />
                                </div>
                                <div className="w-full">
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Message"
                                        className="border-2 pl-4 pt-3 border-white/20 bg-white/10 backdrop-blur rounded-xl h-32 w-full text-white placeholder-white/70 focus:border-white/50 focus:ring-4 focus:ring-white/10 transition-all duration-300 resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-center hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                                >
                                    <span className="flex items-center gap-2">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        Envoyer
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Home;
