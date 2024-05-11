

function CardDepartment({ name, desc }){
    return(
        <div className="flex flex-col justify-center items-center gap-4 w-64">
            <img src="" alt="img" className="border border-red-500 w-20 h-20" />
            <h1 className="font-bold text-2xl text-center">{ name }</h1>
            <p className="text-center">{ desc }</p>
        </div>
    )
}

export default CardDepartment;