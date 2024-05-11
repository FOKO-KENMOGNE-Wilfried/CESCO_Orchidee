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
                    <div className="flex gap-16 justify-between items-center flex-wrap-reverse">
                        <p className="w-96">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae omnis fugit veniam, architecto tempore debitis vitae eos repellendus, esse excepturi numquam veritatis eligendi quisquam in. Quidem dicta eos voluptas nam. Omnis quam at nisi maiores quidem delectus laboriosam eveniet obcaecati.</p>
                        <img className="w-96 rounded-md" src={bg} alt="" />
                    </div>
                </div>

                <div className="w-9/12 flex flex-col gap-16 mt-16">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-3xl font-bold text-center">Notre personnel</h1>
                        <div className="border-primary border-2 h-0 w-32 mt-4"></div>
                    </div>
                    <div className="flex gap-16 justify-center items-center flex-wrap">
                        
                        <Card info1={"Ouvert 24h/24 et 7j/7"} info2={"Nous sommes ouverts et a votre ecoute en permanace"} bg={bg} />
                        <Card info1={"Une medecine de qualite"} info2={"Nous disposons de medecins talentueux et agueris"} bg={bg} />
                        <Card info1={"Ouvert 24h/24 et 7j/7"} info2={"Nous sommes ouverts et a votre ecoute en permanace"} bg={bg} />

                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default About;