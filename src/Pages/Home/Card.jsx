import "./index.css";

function Card({ bg, info1, info2 }) {
    return (
        <div className="group relative border-2 border-gray-200 rounded-xl overflow-hidden w-96 h-card bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:border-blue-500">
            <div className="h-64 w-full overflow-hidden relative">
                <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={bg}
                    alt={info1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-6 flex flex-col items-center gap-6 text-center">
                <h1 className="text-2xl font-bold text-gray-800 relative pb-2">
                    {info1}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-3/4"></span>
                </h1>

                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {info2}
                </p>
            </div>
        </div>
    );
}

export default Card;