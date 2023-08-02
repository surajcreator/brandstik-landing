import Title from "../../Title/Title"
import './Advantage.scss'

const Advantage = () => {
    return (
        <>
            <div className="container custom-container1">
                <div className="pb-5 pt-5">
                    <Title className='text-center'><span className="title-underline center">The BrandSTIK Advantage</span></Title>

                    <div className="row">
                        {
                            advantageData?.map(item => (
                                <div key={item.id} className="col-12 col-md-4">
                                    <div className="advantage-item text-center">
                                        <img src={item.img} className="img-fluid" alt={item.title} />
                                        <Title className='text-center mt-3 color-primary' headingLevel="h5">{item.title}</Title>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="ribbon-band">
                    <Title className='text-center' headingLevel="h4"><strong>BrandSTIK</strong> is trusted by <strong>Global SWAG Leaders</strong> for their Asia Pacific requiremtns.</Title>
                </div>
            </div>
        </>
    )
}

const advantageData = [
    {
        id: 'Ad1',
        img: '/ad1.jpg',
        title: 'MATCHED GLOBAL PRODUCT RANGE'
    },
    {
        id: 'Ad2',
        img: '/ad2.jpg',
        title: 'INTEGRATED LOGISTICS SOLUTIONS'
    },
    {
        id: 'Ad3',
        img: '/ad3.jpg',
        title: 'DEDICATED RELATIONSHIP TEAM'
    }
]
export default Advantage