import SimpleSlider from '../Slider/Slider';
import Title from '../Title/Title';
import './Catalogue.scss';
import { catalogueData } from './CatalogueData';

const Catalogue = () => {
    return (
        <div className='catalogue-wrapper'>
            <div className='container'>
                <Title className='text-center'><span className='title-underline center'>Explore our Catalogue</span></Title>

                <div className='catalogue-item-box'>
                    <SimpleSlider images={catalogueData} slidesToShow={4} />
                </div>
            </div>
        </div>
    )
}

export default Catalogue