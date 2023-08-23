import React, { useState } from 'react';
import Title from '../Title/Title';
import './RequestDemo.scss';

const RequestDemo = () => {
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [emailError, setEmailError] = useState('');
    const [mobileError, setMobileError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    };

    const validateMobile = (mobile) => {
        const mobileRegex = /^\d{10}$/;
        return mobileRegex.test(mobile);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true;

        // Validate email
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            isValid = false;
        } else {
            setEmailError('');
        }

        // Validate mobile
        if (!mobile) {
            setMobileError('Mobile number is required.');
            isValid = false;
        } else if (!validateMobile(mobile)) {
            setMobileError('Please enter a 10-digit mobile number.');
            isValid = false;
        } else {
            setMobileError('');
        }

        // If both email and mobile are valid, proceed with submission
        if (isValid) {
            // Your submission logic here
        }
    };

    return (
        <div className="request-callback">
            <div className='container custom-container1'>
                <Title headingLevel='h2'>Request A Demo</Title>
                <div className='request-form'>
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className='col-12 col-md-4 mb-4'>
                                <input
                                    type='email'
                                    className='input'
                                    name='email'
                                    placeholder='Enter your email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {emailError && <p className="error-message text-light">{emailError}</p>}
                            </div>

                            <div className='col-12 col-md-4 mb-4'>
                                <input
                                    type='tel'
                                    className='input'
                                    name='mobile'
                                    placeholder='Enter your mobile number'
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                />
                                {mobileError && <p className="error-message text-light">{mobileError}</p>}
                            </div>

                            <div className='col-12 col-md-4 mb-4'>
                                <button type='submit' className='c-btn c-btn-success block'>Contact me</button>
                            </div>

                            <div className='col-12 col-md-4 mb-4'>
                                <div className='request-extra button'>
                                    
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RequestDemo;