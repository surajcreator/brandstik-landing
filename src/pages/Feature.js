import { useState } from "react";
import Card from "../components/Card/Card";
import Title from "../components/Title/Title";
import './Feature.scss';

export const Feature = ({featureData, hasBackgrondColor=false, title, featureOptions}) => {
    const [articles, setArticles] = useState(featureData);

    const menuClickHandler = (linkId) =>{
        const filterArticles = featureData.filter(item => item.linkId === linkId);
        setArticles(filterArticles);
    }
    return (
        <div className={`feature-wrapper ${hasBackgrondColor ? 'bg-color' : ''}`}>
            <div className="container">
                {title && <Title className='text-center'><span className="title-underline zero">{title}</span></Title>}
                <ul className="feature-option">
                    {
                        featureOptions?.map(item => (
                            <li key={item.id}><a onClick={() => menuClickHandler(item.id)} className={`c-btn pointer ${item.className}`}>{item.title}</a></li>        
                        ))
                    }
                </ul>

                <div className="feature-item-box">
                    <div className="feature-item-wrapper">
                        {
                            articles?.map(item => (
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