import React from 'react';
import './Arrows.scss';

const CustomPrevArrow = (props) => (
  <div className="slick-arrow slick-prev" {...props}></div>
);

const CustomNextArrow = (props) => (
  <div className="slick-arrow slick-next" {...props}></div>
);

export { CustomPrevArrow, CustomNextArrow };
