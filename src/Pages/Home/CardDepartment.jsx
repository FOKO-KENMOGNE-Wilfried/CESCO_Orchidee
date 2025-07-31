import "./index.css";

function CardDepartment({ name, desc, img }) {
    return (
        <div className="relative group overflow-hidden rounded-xl shadow-lg w-64 h-64 bg-white transition-all duration-300 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 h-full flex flex-col justify-center items-center gap-4 p-6 text-center transition-all duration-300 group-hover:text-white">
                <div className="bg-white p-4 rounded-full group-hover:bg-white/20 group-hover:backdrop-blur-sm transition-all duration-300">
                    <img
                        src={img}
                        alt={name}
                        className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                </div>

                <h1 className="font-bold text-2xl relative pb-2">
                    {name}
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-white transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
                </h1>

                <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                    {desc}
                </p>

                <button className="absolute -bottom-10 opacity-0 bg-white text-blue-700 px-6 py-2 rounded-full font-medium transition-all duration-500 group-hover:bottom-6 group-hover:opacity-100 hover:bg-blue-50">
                    En savoir plus
                </button>
            </div>
        </div>
    );
}

export default CardDepartment;