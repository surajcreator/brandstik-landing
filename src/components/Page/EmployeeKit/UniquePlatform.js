import Title from '../../Title/Title';
import './UniquePlatform.scss';

const UniqueTechPlatform = () =>{
    return(
        <div className="platform-wrapper">
            <div className='container'>
                <div className='row'>
                    <div className='d-none d-md-block col-md-7'>
                        <img className='img-fluid' src='/unique-tech-platform.jpg' alt="unique tech platform" />
                    </div>

                    <div className='col-12 col-md-5'>
                        <div className='platform-text'>
                            <Title className='text-end'>Unique <span className='title-underline right'>Tech Platform</span></Title>

                            <p>
                            Leading brands trust the BrandSTIK - FOXBOX Rewards Solutions platform to underpin their employee engagement processes, so you never need to worry about coordination or logistics
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UniqueTechPlatform