import bg from "../../assets/bg.jpg";
import profile from "../../assets/images/profile.jpeg";
import Card from "../Home/Card";
import { FaStethoscope, FaUserMd, FaHospitalSymbol } from "react-icons/fa";

function About() {
    return (
        <div className="min-h-screen pb-16 bg-gray-50">
            <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 h-head flex flex-col justify-end items-center pb-10 overflow-hidden image">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-30'></div>
                <p className="relative text-white text-4xl font-bold tracking-wide animate-fade-in-up">A propos de nous</p>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                <section className="py-16">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center">
                            <FaHospitalSymbol className="text-blue-600 mr-3 text-3xl" />
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                Qui sommes-nous ?
                            </h2>
                        </div>
                        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2 space-y-6">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Le Centre de Santé Communautaire L&apos;Orchidée est une structure fondée en XXXX. Située aux environs de Ndogpassi 2, plus précisément au carrefour Bon Blanc, notre mission première est de garantir le bien-être physique et mental de la population.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mt-8">
                                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                                    <FaUserMd className="text-blue-600 text-2xl mb-3" />
                                    <h3 className="font-bold text-lg mb-2">Professionnels qualifiés</h3>
                                    <p className="text-gray-600">Une équipe médicale expérimentée et dévouée</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-cyan-500">
                                    <FaStethoscope className="text-cyan-600 text-2xl mb-3" />
                                    <h3 className="font-bold text-lg mb-2">Soins complets</h3>
                                    <p className="text-gray-600">Une gamme étendue de services médicaux</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative rounded-xl overflow-hidden shadow-2xl">
                                <img
                                    src={bg}
                                    alt="Notre centre"
                                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 via-transparent to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center">
                            {/* <FaUserMd className="text-blue-600 mr-3 text-3xl" /> */}
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                                Notre personnel
                            </h2>
                        </div>
                        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        <Card
                            info1={"Dr KENMOGNE Justin"}
                            info2={"Médecin Généraliste Diplômé d'État"}
                            bg={profile}
                        />
                        <Card
                            info1={"Dr NDOUMBE Alice"}
                            info2={"Infirmière Diplômée d'État"}
                            bg={profile}
                        />
                        <Card
                            info1={"Mme TCHOUANKE Martine"}
                            info2={"Secrétaire Médicale"}
                            bg={profile}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;