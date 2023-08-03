import { clientData } from './ClientData';
import './OurClient.scss';

const OurClient = ({ orientation, setSelectedClient }) => {
    const clientSelectHandler = (data) =>{
        setSelectedClient && setSelectedClient(data)
    }

    return (
        <div className='our-client'>
            <div className={`client-wrapper ${orientation === 'horizontal' ? 'horizontal' : 'vertical'}`}>
                {
                    clientData?.map(item => (
                        <div onClick={() => clientSelectHandler({
                            description:item.description,
                            name: item.name,
                            kitImg: item.kitImg
                        })} className='client-item' key={item.id}>
                            <img src={item.img} alt={item.name} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default OurClient