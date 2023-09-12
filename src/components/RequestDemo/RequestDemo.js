import React, { useState } from "react";
import Title from "../Title/Title";
import "./RequestDemo.scss";

const RequestDemo = () => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [requestCallBackSuccess, setRequestCallBackSuccess] = useState(false);
  const [requestCallBackFail, setRequestCallBackFail] = useState(false);

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
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validate mobile
    if (!mobile) {
      setMobileError("Mobile number is required.");
      isValid = false;
    } else if (!validateMobile(mobile)) {
      setMobileError("Please enter a 10-digit mobile number.");
      isValid = false;
    } else {
      setMobileError("");
    }

    // If both email and mobile are valid, proceed with submission
    if (isValid) {
      sendRequestDemo(email, mobile).then((result) => {
        if (result) {
          setRequestCallBackSuccess(true);
          setRequestCallBackFail(false);
        } else {
          setRequestCallBackFail(true);
          setRequestCallBackSuccess(false);
        }
      });
    }
  };

  async function sendRequestDemo(userEmail, callBackNumber) {
    try {
      const response = await fetch(
        `https://www.brandstik.com/Services/RequestDemo.aspx?userEmail=${userEmail}&callBackNumber=${callBackNumber}&requestCode=AppEmaileWgc2MtjN`,
      );

      if (response.ok) {
        return true;
      } else {
        // Handle error response
        console.error("Request failed:", response.statusText);
        return false;
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Request error:", error);
      return false;
    }
  }

  return (
    <div className="request-callback">
      <div className="container custom-container1">
        <Title headingLevel="h2">Request A Demo</Title>
        <div className="request-form">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12 col-md-4 mb-4">
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && (
                  <p className="error-message text-light">{emailError}</p>
                )}
              </div>

              <div className="col-12 col-md-4 mb-4">
                <input
                  type="tel"
                  className="input"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
                {mobileError && (
                  <p className="error-message text-light">{mobileError}</p>
                )}
              </div>

              <div className="col-12 col-md-4 mb-4">
                <button type="submit" className="c-btn c-btn-success block">
                  Contact me
                </button>
              </div>

              {requestCallBackSuccess && (
                <div className="col-12">
                  <div className="alert alert-success">
                    Your request has been received, and one of our
                    representatives will be in touch with you shortly.
                  </div>
                </div>
              )}

              {requestCallBackFail && (
                <div className="col-12">
                  <div className="alert alert-danger">
                    Apologies for the inconvenience. It appears that a technical
                    error has occurred. Kindly consider attempting your action
                    once more.
                  </div>
                </div>
              )}

              <div className="col-12 col-md-4 mb-4">
                <div className="request-extra-button">
                  <button className="c-btn block c-btn-bright">
                    <div className="d-flex">
                      <img src="/phone-icon.jpg" width="40" height="40" />
                      <p className="ms-3">
                        <a href="tel:+919594074940">
                        Call us
                        <br />
                        +91 95940 74940
                        </a>
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-4">
                <div className="request-extra-button">
                  <button className="c-btn block c-btn-info">
                    <div className="d-flex">
                      <img src="/chat-icon.jpg" width="40" height="40" />
                      <p className="ms-3">
                        <a href="javascript:$zopim.livechat.window.show()">
                        Chat with us
                        <br />
                        Live chat
                        </a>
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              <div className="col-12 col-md-4 mb-4">
                <div className="request-extra-button">
                  <button className="c-btn block c-btn-light">
                    <div className="d-flex">
                      <img src="/email-icon.jpg" width="40" height="40" />
                      <p className="ms-3">
                        <a href="mailto:info@brandstik.com">
                        Mail us
                        <br />
                        info@brandstik.com
                        </a>
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestDemo;
