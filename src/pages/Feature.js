import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Title from "../components/Title/Title";
import './Feature.scss';

export const Feature = ({ featureData, hasBackgroundColor = false, title, featureOptions, apiCaller }) => {
  const [articles, setArticles] = useState(featureData);

  const onClickHandler = async (searchTerm) => {
    debugger
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
          {featureOptions?.map(item => (
            <li key={item.id}><a onClick={() => onClickHandler(item.value)} className={`c-btn pointer ${item.className}`}>{item.title}</a></li>
          ))}
        </ul>

        <div className="feature-item-box">
          <div className="feature-item-wrapper">
            {articles?.map(item => (
              <div key={item.id} className="feature-item">
                <Card data={item} readMore={`https://www.brandstik.com/${item.slug}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
