import "./index.css"

function CardDepartment({ name, desc, img }){
    return(
        <div className="relative services flex bg-gray-100 flex-col justify-center items-center w-64 h-64">
            <div className="absolute z-0 bottom-0 effect bg-secondary w-full h-0"></div>
            <div className="relative z-40 flex flex-col justify-center items-center gap-4 info_container">
                <img src={img} alt="img" className="w-20 h-20" />
                <h1 className="font-bold text-2xl text-center w-32">{ name }</h1>
                <p className="text-center">{ desc }</p>
            </div>
        </div>
    )
}

export default CardDepartment;