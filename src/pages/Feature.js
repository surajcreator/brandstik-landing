import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Title from "../components/Title/Title";
import './Feature.scss';

export const Feature = ({ featureData, hasBackgroundColor = false, title, featureOptions, apiCaller, showPrice }) => {
  const [articles, setArticles] = useState(featureData);

  const onClickHandler = async (searchTerm) => {
    if (apiCaller) {
      await apiCaller(searchTerm);
    }
  };

  useEffect(()=>{
    setArticles(featureData);
  },[featureData]);

  return (
    <div className={`feature-wrapper ${hasBackgroundColor ? 'bg-color' : ''}`}>
      <div className="container">
        {title && <Title className='text-center'><span className="title-underline zero">{title}</span></Title>}
        <ul className="feature-option">
          {featureOptions?.map(item => {
            if(item.link === undefined){
              return <li key={item.id}><a onClick={() => onClickHandler(item.value)} className={`c-btn pointer ${item.className}`}>{item.title}</a></li>
            }else{
              return <li key={item.id}><a href={item.link} target="_blank" className={`c-btn pointer ${item.className}`}>{item.title}</a></li>
            }
          })}
        </ul>

        <div className="feature-item-box">
          <div className="feature-item-wrapper">
            {articles?.map(item => (
              <div key={item.id} className="feature-item">
                <Card showPrice={showPrice} data={item} readMore={`https://www.brandstik.com/shop/products/${item.link}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
