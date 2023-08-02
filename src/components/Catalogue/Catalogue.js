import Card from '../Card/Card';
import Title from '../Title/Title';
import './Catalogue.scss';
import { catalogueData } from './CatalogueData';

const Catalogue = () => {
    return (
        <div className='catalogue-wrapper'>
            <div className='container custom-container1'>
                <Title className='text-center'><span className='title-underline center'>Explore our Catalogue</span></Title>

                <div className='catalogue-item-box'>
                    <div className='row'>
                        {
                            catalogueData?.map(item => (
                                <div key={item.id} className='col-12 col-lg-4'>
                                    <Card data={item} hasDownload={true} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalogue