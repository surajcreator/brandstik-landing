import Card from "../components/Card/Card";
import Title from "../components/Title/Title";
import './Feature.scss';

const Feature = ({featureData, hasBackgrondColor=false, title, featureOptions}) => {
    return (
        <div className={`feature-wrapper ${hasBackgrondColor ? 'bg-color' : ''}`}>
            <div className="container">
                {title && <Title className='text-center'><span className="title-underline zero">{title}</span></Title>}
                <ul className="feature-option">
                    {
                        featureOptions?.map(item => (
                            <li key={item.id}><a className={`c-btn ${item.className}`} href='#'>{item.title}</a></li>        
                        ))
                    }
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