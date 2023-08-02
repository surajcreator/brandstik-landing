import { useState } from "react";
import OurClient from "../../../OurClient/OurClient";
import Title from "../../../Title/Title";
import './Client.scss';
import { useEffect } from "react";
import { clientData } from "../../../OurClient/ClientData";

const Client = () => {
    const [size, setSize] = useState();
    const [selectedClient, setSelectedClient] = useState({
        description: clientData[0].description
    })

    useEffect(()=>{
        const deviceWidth = window.innerWidth;
        setSize(deviceWidth);
    },[]);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-md-3">
                            <Title><span className="title-underline left">Our clients:</span></Title>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <OurClient orientation={size <= 991 ? 'horizontal' : 'vertical'} setSelectedClient={setSelectedClient} />
                </div>

                <div className="col-12 col-md-8">
                    <div className='product-banner'>
                        <img className="img-fluid" src='/client-banner-product.jpg' alt="client-banner-product" />
                    </div>
                    <div className="banner-text">
                        <h3>{selectedClient?.description}</h3>
                        <p className="mt-4">
                            <a className="c-btn c-btn-active">Welcome Kit</a>
                            <a className="c-btn ms-3">Employee Kit Kit</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Client