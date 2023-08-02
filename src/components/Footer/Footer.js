import { preFooterData } from '../../pages/WelcomeKit/PreFooterData';
import Title from '../Title/Title';
import './Footer.scss';
import ReactHtmlParser from 'react-html-parser';
import {FiPhoneCall} from 'react-icons/fi';
import {AiOutlineMail} from 'react-icons/ai';

const Footer = () => {
    return (
        <footer>
            <div className='pre-footer'>
                <div className='container'>
                    <Title title={"Why Choose BrandSTIK's International Welcome Kit?"} className={'text-center'} headingLevel='h3' />

                    <div className='pre-footer-items mt-5'>
                        {
                            preFooterData?.map(item => (
                                <div key={item.id} className='mb-5'>
                                    <Title headingLevel='h5'>{item.title}</Title>
                                    <article className='article-description font-1 mt-2'>{ReactHtmlParser(item.description)}</article>
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
                        <li><a className='c-btn c-btn-bright' href='https://www.brandstik.com/contact-us'>Contact Us</a></li>
                        <li><a className='c-btn c-btn-bright' href='https://www.brandstik.com/contact-us'>International Partnerships</a></li>
                        <li><a className='c-btn c-btn-bright' href='https://www.brandstik.com/contact-us'>Welcome Kit Program</a></li>
                        <li><a className='c-btn c-btn-bright' href='https://blog.brandstik.com'>Blog</a></li>
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