import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.scss'

import React from "react";
import Slider from "react-slick";
import Card from "../Card/Card";
import { CustomNextArrow, CustomPrevArrow } from "./Arrows";
export default function SimpleSlider({ images, slidesToShow, type }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToShow,
        arrows: true,
        prevArrow: <CustomPrevArrow />, // Use custom arrow components
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Show 1 item per slide on mobile
                },
            },
        ],
    };
    return (
        <Slider {...settings}>
            {
                images?.map(item => (
                    <div key={item.id} className="slide-item">
                        {
                            type === 'testimonial' ? 
                                <div className="me-3">
                                    <img className="img-fluid" src={item.img} />
                                </div>
                             : <Card data={item} />
                        }
                    </div>
                ))
            }
        </Slider>
    );
}