import SimpleSlider from "../Slider/Slider";
import Title from "../Title/Title";
import { testimonialData } from "./TestimonialData";
import './Testimonials.scss';

const Testimonials = () => {
    return (
        <div className="testimonials-wrapper">
            <div className='container'>
                <Title className='text-center'><span className='title-underline center'>Client Testimonials</span></Title>

                <div className='mt-3'>
                    <SimpleSlider images={testimonialData} slidesToShow={2} type='testimonial' />
                </div>
            </div>
        </div>
    )
}

export default Testimonials