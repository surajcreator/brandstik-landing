import Title from "../../components/Title/Title";
import './Feature.scss';
import parse from 'html-react-parser';

const DiwaliFeatures = () => {
    return (
        <>
            <div className="container">
                <div className="pb-5 pt-5">
                    <Title className='text-center'><span className="title-underline zero">Our Features</span></Title>

                    <div className="row">
                        {
                            advantageData?.map(item => (
                                <div key={item.id} className="col">
                                    <div className="feature-item text-center">
                                        <img src={item.img} className="" alt={item.title} />
                                        <Title className='text-center mt-3 title' headingLevel="h6">{parse(item.title)}</Title>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

const advantageData = [
    {
        id: 'Ad1',
        img: '/diwali-feature1.jpg',
        title: 'Over 1000 options<br /> to choose from'
    },
    {
        id: 'Ad2',
        img: '/diwali-feature2.jpg',
        title: 'Custom Logo<br /> Branding'
    },
    {
        id: 'Ad3',
        img: '/diwali-feature3.jpg',
        title: 'Shipping directly<br /> to Employees'
    },
    {
        id: 'Ad3',
        img: '/diwali-feature4.jpg',
        title: 'Pan India<br /> Shipment'
    },
    {
        id: 'Ad3',
        img: '/diwali-feature5.jpg',
        title: 'Individual<br /> Packaging'
    }
]
export default DiwaliFeatures