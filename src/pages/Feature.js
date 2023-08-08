import Card from "../components/Card/Card";
import Title from "../components/Title/Title";
import './Feature.scss';

const Feature = ({featureData, hasBackgrondColor=false, title}) => {
    return (
        <div className={`feature-wrapper ${hasBackgrondColor ? 'bg-color' : ''}`}>
            <div className="container">
                <Title className='text-center'><span className="title-underline zero">{title}</span></Title>
                <ul className="feature-option">
                    <li><a className='c-btn c-btn-active' href='#'>3000+ Products</a></li>
                    <li><a className='c-btn c-btn-success' href='#'>Innovative Kits</a></li>
                    <li><a className='c-btn c-btn-bright' href='#'>Global Shipping</a></li>
                    <li><a className='c-btn c-btn-active' href='#'>Inhouse Printing Facility</a></li>
                </ul>

                <div className="feature-item-box">
                    <div className="feature-item-wrapper">
                        {
                            featureData?.map(item => (
                                <div className="feature-item">
                                    <Card data={item} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature