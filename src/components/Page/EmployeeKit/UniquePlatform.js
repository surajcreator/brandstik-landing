import Title from '../../Title/Title';
import './UniquePlatform.scss';
import parse from 'html-react-parser';

export const UniqueTechPlatform = ({img, title, description, link}) =>{
    return(
        <div className="platform-wrapper">
            <div className='container'>
                <div className='row'>
                    <div className='d-none d-md-block col-md-7'>
                        <img className='img-fluid' src={img} alt="unique tech platform" />
                    </div>

                    <div className='col-12 col-md-5'>
                        <div className='platform-text'>
                            <Title>{title && parse(title)}</Title>

                            <p>{description}</p>
                            <p className='text-end'>
                                <a target='_blank' href={link}>Read more</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UniqueTechPlatform