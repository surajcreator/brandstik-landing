import Catalogue from "../../components/Catalogue/Catalogue";
import ContentBlock from "../../components/ContentBlock/ContentBlock";
import Footer from "../../components/Footer/Footer";
import HeroSlider from "../../components/HeroSlider/HeroImageSlider";
import WelcomeKitSpecs from "../../components/Page/EmployeeKit/Specs/Specs";
import Advantage from "../../components/Page/InternationalKit/Advantage";
import ClinteInt from "../../components/Page/InternationalKit/Client";
import RibbonWithTitle from "../../components/RibbonWithTitle/RibbonWithTitle";
import Testimonials from "../../components/Testimonials/Testimonials";
import {Feature} from "../Feature";
import { heroSliderInternationalWelcomeKit } from "./HeroSliderData";
import './InternationalWelcomeKit.scss';
import { featureDataInternational } from "./featureDataInternations";
import { preFooterInternationalData } from "./preFooterData";

const InternationalWelcomeKit = () => {
    return (
        <>
            <HeroSlider data={heroSliderInternationalWelcomeKit} />
            <Advantage />
            <ClinteInt />
            <div className="container custom-container mt-5 mb-5 why-section">
                <ContentBlock title={{ text: 'Why is BrandSTIK is the <span class="title-underline zero">Partner of Choice</span> for Global Swag Leaders?', cssClass: 'text-center' }} content='<div class="mt-4"><p>BrandSTIK helps you address the Asia-Pacific swag needs of your clients and optimize your
shipping and customs charges in this region. We can match global swag products with our high
quality made in India range to ensure smooth execution of logistics.</p>
                
                <p>
                Our 10 years of experience in manufacturing, warehousing and fulfilment of swag requirements
will ensure smooth execution of the entire operation from order placement to delivery.

                </p></div>' contentClass='text-center welcome-kit-deploy' />
            </div>
            <Feature featureData={featureDataInternational} hasBackgrondColor={true} />
            <WelcomeKitSpecs src="/specs-international-welcome-kit.jpg" alt="Employee Welcome kit" />
            <RibbonWithTitle text='Reach Out to Us' />
            <Catalogue />
            <Testimonials />
            <Footer  preFooterData={preFooterInternationalData} preFooterTitle={"Why Choose BrandSTIK's International Welcome Kit?"} />
        </>
    )
}

export default InternationalWelcomeKit