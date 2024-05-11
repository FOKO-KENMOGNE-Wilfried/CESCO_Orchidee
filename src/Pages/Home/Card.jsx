import "./index.css";

function Card({ bg, info1, info2 }){
    return(
        <div className="border border-gray-400 py-5 px-2 w-96  h-card  rounded-md flex flex-col items-center gap-8">
            <div className="h-64 contain bg-white overflow-hidden ">
                <img className="w-full h-full" src={bg} alt="image" />
            </div>
            <div className=" flex flex-col justify-around items-center px-8 gap-10">
                <h1 className="text-2xl font-bold text-center">{ info1 }</h1>
                <p className=" text-center">{ info2 }</p>
            </div>
        </div>
    )
}

export default Card;