import HeroSlider from "../../components/HeroSlider/HeroImageSlider"
import RibbonWithTitle from "../../components/RibbonWithTitle/RibbonWithTitle"
import WelcomeKitSpecs from "../../components/Page/EmployeeKit/Specs/Specs"
import Client from "../../components/Page/EmployeeKit/Client/Client"
import ContentBlock from "../../components/ContentBlock/ContentBlock"
import './WelcomeKit.scss'
import IconWithBackground from "../../components/Page/EmployeeKit/IconWithBackground/IconWithBackground"
import Footer from "../../components/Footer/Footer"
import UniqueTechPlatform from "../../components/Page/EmployeeKit/UniquePlatform"
import {Feature} from "../Feature"
import Catalogue from "../../components/Catalogue/Catalogue"
import Testimonials from "../../components/Testimonials/Testimonials"
import { heroSliderEmployeeWelcomeKit } from "./HeroSliderData";
import { preFooterData } from "./PreFooterData"
import { featureData, featureOptions } from "./FeatureData"

const WelcomeKit = () =>{
    return(
        <>
            <HeroSlider data={heroSliderEmployeeWelcomeKit} />
            <RibbonWithTitle text='Request a Demo' redirectLink={{link: 'https:www.brandstik.com/contact-us', target:'_blank'}} />
            <WelcomeKitSpecs src="/specs-welcome-kit.svg" alt="Employee Welcome kit" />
            <div className="mt-4"><Client /></div>
            <div className="container custom-container mt-5 mb-5">
                <ContentBlock title={{text:'<span class="title-underline left">Easy to deploy</span> Welcome Kit Program', cssClass:'text-center'}} content='<p>BrandSTIK is the largest welcome kit provider in India and our experts will work with you through every step of the process from designing the kit to last mile delivery. We have designed welcome kits for every budget and target. You can define multiple kits for different segments (gender, seniority or location) or a single standard kit as per your requirement.</p>
                
                <p>
                Your welcome kit program will run smoothly backed by our proprietary tech platform which ensures easy implementation.
                </p>' contentClass='text-center welcome-kit-deploy' />
            </div>
            <IconWithBackground title={{text:'<span class="title-underline left">Ready to start</span> your program', cssClass:'font-1 text-center mt-5'}} />
            <div className="container custom-container mt-5 mb-5">
                <ContentBlock title={{text:'<span class="title-underline center">BrandSTIK Advantage</span>', cssClass:'text-center'}} content='BrandSTIK offers the simplest wat to build and deploy the welcome kit program. We manage the entire operational aspects of the program and enusure your program is successful.' contentClass='text-center welcome-kit-deploy' />
            </div>
            <UniqueTechPlatform img='/unique-tech-platform.jpg' title="Unique <span className='title-underline zero'>Tech Platform</span>" description="Leading brands trust the BrandSTIK - FOXBOX Rewards Solutions platform to underpin their employee engagement processes, so you never need to worry about coordination or logistics" link="https://www.brandstik.com/platform/welcome-kit-redemption-platform/1" />
            <Feature featureData={featureData} title='Our Feature' featureOptions={featureOptions} />
            <Testimonials />
            <Catalogue />
            <Footer  preFooterData={preFooterData} preFooterTitle={""} />
        </>
    )
}

export default WelcomeKit