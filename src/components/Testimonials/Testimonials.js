import SimpleSlider from "../Slider/Slider";
import Title from "../Title/Title";
import { testimonialData } from "./TestimonialData";
import './Testimonials.scss';

const Testimonials = () => {
    return (
        <div className="testimonials-wrapper">
            <div className='container custom-container1'>
                <Title className='text-center'><span className='title-underline center'>Client Testimonials</span></Title>

                <div className='mt-3'>
                    <div className='row'>
                        {
                            testimonialData?.map(item => (
                                <div className="col-12 col-md-6">
                                    <img className="img-fluid" src={item.img} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials