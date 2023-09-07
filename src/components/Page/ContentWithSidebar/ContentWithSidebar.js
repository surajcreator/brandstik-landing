import { useState, useEffect } from "react";
import './ContentWithSidebar.scss';
import parse from 'html-react-parser';
import Title from "../../Title/Title";
import { popularKitData } from "../../../pages/Diwali/data/PopularKit";

export const ContentWithSidebar = ({title, navItems}) => {
    const [size, setSize] = useState();
    const [selectedArticle, setSelectedArticle] = useState({
        id: popularKitData[0].id,
        description: popularKitData[0].description,
        name: popularKitData[0].name,
        kitImg: popularKitData[0].kitImg,
        navItems: popularKitData[0].navItems,
        subItems: popularKitData[0].subItems
    })

    useEffect(()=>{
        const deviceWidth = window.innerWidth;
        setSize(deviceWidth);
    },[]);
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <Title>
              <span className="left">{title && parse(title)}</span>
            </Title>
            <ul className="side-bar-nav">
              {navItems?.map((item) => (
                <li
                  key={item.id}
                  className={`mb-3 ${size <= 991 ? "horizontal" : "vertical"}`}
                >
                  <a onClick={() => setSelectedArticle({
                    id: item.id,
                    description: item.description,
                    name: item.name,
                    kitImg: item.kitImg,
                    navItems: item.navItems,
                    subItems:item.subItems
                  })} className={`c-btn d-block pointer ${
                      selectedArticle.id === item.id ? "c-btn-bright" : ""}`}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-md-9">
            <div className="product-banner">
              <img
                className="img-fluid"
                src={selectedArticle.kitImg}
                alt={selectedArticle.name}
              />
            </div>
            <div className="banner-text">
              <h4>{selectedArticle?.name}</h4>
              {
                selectedArticle?.subItems.length > 0 &&
                <div className="subItemsContent">
                  <strong>Includes</strong>
                  <ol>
                    {
                      selectedArticle?.subItems.map((subItem, index) => (
                        <li key={`subItem${index}`}>{subItem}</li>
                      ))
                    }
                  </ol>
                </div>
              }  
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod quam vel sapien dignissim, ac eleifend massa ultricies. Nullam eget neque ut turpis varius fermentum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod quam vel sapien dignissim, ac eleifend massa ultricies. Nullam eget neque ut turpis varius fermentum.
              </p> */}
              {/* <p className="mt-4">
                <a className="c-btn c-btn-active">Welcome Kit</a>
                <a className="c-btn ms-3">Employee Kit Kit</a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    );
}