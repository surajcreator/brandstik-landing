import Title from '../Title/Title';
import './Footer.scss';
import parse from 'html-react-parser';
import {FiPhoneCall} from 'react-icons/fi';
import {AiOutlineMail} from 'react-icons/ai';

const Footer = ({preFooterData, preFooterTitle}) => {
    return (
        <footer>
            <div className='pre-footer'>
                <div className='container'>
                    {preFooterTitle && <Title title={"Why Choose BrandSTIK's International Welcome Kit?"} className={'text-center'} headingLevel='h3'><span className='title-underline center'>{preFooterTitle}</span></Title>}

                    <div className='pre-footer-items mt-5'>
                        {
                            preFooterData?.map(item => (
                                <div key={item.id} className='mb-5'>
                                    <Title headingLevel='h5'>{item.title}</Title>
                                    <article className='article-description font-1 mt-2'>{parse(item.description)}</article>
                                </div>
                            ))
                        }
                        <div className='mb-5'>

                        </div>
                    </div>
                </div>
            </div>

            <div className='help-section'>
                <h2>We are here to help you with innovative merchandising solutions</h2>
                <div className='divider'></div>
                <div className='container'>
                    <ul className='footer-help-links'>
                        <li><a className='c-btn c-btn-bright' target='_blank' href='https://www.brandstik.com/contact-us'>Contact Us</a></li>
                        <li><a className='c-btn c-btn-bright' href='/international-welcome-kit' target='_blank'>International Partnerships</a></li>
                        <li><a className='c-btn c-btn-bright' target='_blank' href='/employee-welcome-kit'>Welcome Kit Program</a></li>
                        <li><a className='c-btn c-btn-bright' target='_blank' href='https://blog.brandstik.com'>Blog</a></li>
                    </ul>

                    <div className='contact-details'>
                        <div className="row">
                            <div className='col-12 col-md-6'>
                                <FiPhoneCall className='icon' />
                                9167373749 / 9594070940
                            </div>

                            <div className='col-12 col-md-6'>
                                <AiOutlineMail className='icon' />
                                info@brandstik.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='main-footer'>

            </div>
        </footer>
    )
}

export default Footer