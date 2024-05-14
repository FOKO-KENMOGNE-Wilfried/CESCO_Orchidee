

function CardDepartment({ name, desc, img }){
    return(
        <div className="flex flex-col justify-center items-center gap-4 w-64">
            <img src={img} alt="img" className="w-20 h-20" />
            <h1 className="font-bold text-2xl text-center w-32">{ name }</h1>
            <p className="text-center">{ desc }</p>
        </div>
    )
}

export default CardDepartment;