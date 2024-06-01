import bg from "../../assets/bg.jpg"
import Card from "../Home/Card";


function About(){

    return(
        <div className="min-h-screen pb-16">

            <div className="bg-gray-500 h-head flex flex-col justify-end items-center pb-10 image">
                <p className="text-white text-2xl font-bold">A propos de nous</p>
            </div>

            <div className="flex flex-col justify-center items-center w-full">

                <div className="w-9/12 flex flex-col gap-16 mt-16">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-3xl font-bold text-center">Qui sommes nous ?</h1>
                        <div className="border-primary border-2 h-0 w-32 mt-4"></div>
                    </div>
                    <div className="flex gap-16 justify-center items-center flex-wrap-reverse">
                        <p className="w-96">Le centre de sante communautaire l'orchidee est une structure fonde en XXXX. Elle est situe au environs de Ndogpassi 2 plus precisement au carefour Bon Blanc et a pour but premier est de garantir le bien etre physique et mental de la population </p>
                        <img className="w-96 rounded-md" src={bg} alt="" />
                    </div>
                </div>

                <div className="w-9/12 flex flex-col gap-16 mt-16">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-3xl font-bold text-center">Notre personnel</h1>
                        <div className="border-primary border-2 h-0 w-32 mt-4"></div>
                    </div>
                    <div className="flex gap-16 justify-center items-center flex-wrap">
                        
                        <Card info1={"Mr KENMOGNE Justin"} info2={"Medecin Generaliste Diplome d'Etat"} bg={""} />
                        <Card info1={""} info2={""} bg={""} />
                        <Card info1={""} info2={""} bg={""} />

                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default About;