import mail from "../../assets/images/mail1.svg";
import number from "../../assets/images/phone.png";
import position from "../../assets/images/position.svg";

function Contact_us() {
    return (
        <div className="min-h-screen pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 h-head flex flex-col justify-end items-center pb-10 overflow-hidden image">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-30'></div>
                <p className="relative text-white text-4xl font-bold tracking-wide animate-fade-in-up">Contactez-nous</p>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
            </div>

            <div className="flex justify-around flex-wrap gap-20 pt-32 screen1:flex-col screen1:items-center screen1:gap-12 px-4">
                {/* Section Informations */}
                <div className="flex flex-col gap-8 screen1:text-center pl-4 pr-4 max-w-md">
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <h1 className="font-bold mb-6 text-3xl text-gray-800 flex items-center justify-center screen1:justify-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            Localisation
                        </h1>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-center contact:flex-col contact:pt-4 group">
                                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <img src={position} alt="location" className="w-6 h-6 filter brightness-0 invert" />
                                </div>
                                <p className="text-gray-700 font-medium">NDOGPASSI II - Bon-Blanc</p>
                            </div>

                            <div className="flex gap-4 items-center contact:flex-col contact:pt-4 group">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <img src={mail} alt="email" className="w-6 h-6 filter brightness-0 invert" />
                                </div>
                                <p className="text-gray-700 font-medium">cescoorchidee@gmail.com</p>
                            </div>

                            <div className="flex gap-4 items-center contact:flex-col contact:pt-4 group">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <img src={number} alt="number" className="w-6 h-6 filter brightness-0 invert" />
                                </div>
                                <div className="text-gray-700 font-medium">
                                    <p>+237 699887088</p>
                                    <p>+237 677003892</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                        <h1 className="font-bold mb-4 text-2xl text-gray-800 flex items-center justify-center screen1:justify-center gap-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                </svg>
                            </div>
                            Heures d&apos;ouverture
                        </h1>
                        <p className="text-gray-700 font-medium text-center">Nous sommes ouverts <span className="text-blue-600 font-bold">24h/24 et 7j/7</span></p>
                    </div>
                </div>

                {/* Section Formulaire */}
                <div className="screen1:text-center flex flex-col items-center px-8 max-w-2xl">
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 w-full">
                        <h1 className="font-bold pb-6 text-3xl text-gray-800 text-center">Des questions ? Écrivez-nous</h1>
                        <form action="" className="flex flex-col gap-6 w-full">
                            <div className="flex gap-4 flex-wrap sm:flex-nowrap">
                                <input
                                    type="text"
                                    placeholder="Nom"
                                    className="border-2 border-gray-200 w-full rounded-xl h-12 pl-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 hover:border-gray-300"
                                />
                                <input
                                    type="text"
                                    placeholder="Prénom"
                                    className="border-2 border-gray-200 w-full rounded-xl h-12 pl-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 hover:border-gray-300"
                                />
                            </div>
                            <div className="flex gap-4 flex-wrap sm:flex-nowrap">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="border-2 border-gray-200 w-full rounded-xl h-12 pl-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 hover:border-gray-300"
                                />
                                <input
                                    type="number"
                                    placeholder="Numéro de téléphone"
                                    className="border-2 w-full border-gray-200 rounded-xl h-12 pl-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 hover:border-gray-300"
                                />
                            </div>
                            <div>
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Message"
                                    className="border-2 pl-4 pt-3 border-gray-200 rounded-xl w-full h-32 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 hover:border-gray-300 resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white p-4 rounded-xl font-bold text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                            >
                                <span className="flex items-center justify-center gap-2">
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

                {/* Section Carte */}
                <div className="w-full flex justify-center items-center mt-12">
                    <div className="w-full max-w-6xl bg-white rounded-2xl p-4 shadow-xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.9814578921055!2d9.76196607616387!3d4.024191495949552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d0055242ebf%3A0xdfc0468e219fa655!2sCentre%20Hospitalier%20CESCO!5e0!3m2!1sen!2scm!4v1715457761128!5m2!1sen!2scm"
                            width="100%"
                            height="600"
                            style={{ border: 0, borderRadius: '1rem' }}
                            onTouchStart={(e) => {
                                e.preventDefault();
                            }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact_us;