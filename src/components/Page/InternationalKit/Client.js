import OurClient from "../../OurClient/OurClient"
import Title from "../../Title/Title"

const ClinteInt = () =>{
    return(
        <div className="clients-wrapper pb-5 pt-5">
            <div className="container custom-container1">
                <Title className='text-center'><span className="title-underline zero">Our Clients</span></Title>
                <div className="mt-4">
                    <OurClient orientation={'horizontal'} />
                </div>
            </div>
        </div>
    )
}

export default ClinteInt