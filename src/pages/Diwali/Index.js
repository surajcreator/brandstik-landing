import HeroSlider from "../../components/HeroSlider/HeroImageSlider"
import DiwaliFeatures from "./Features"
import { heroSlider } from "./data/HeroSliderData"
import { ContentWithSidebar as PopularKit } from '../../components/Page/ContentWithSidebar/ContentWithSidebar';
import { popularKitData } from "./data/PopularKit";
import {Feature as SearchByPrice, Feature as SearchByCategory} from '../Feature';
import { priceData, priceOptions } from "./data/SearchByPrice";
import { categoryData, categoryOptions } from "./data/SearchByCategory";
import {UniqueTechPlatform as RedeemDiwaliGift} from '../../components/Page/EmployeeKit/UniquePlatform'
import { preFooterInternationalData } from "../InternationalWelcomeKit/preFooterData";
import Footer from "../../components/Footer/Footer";

const DiwaliGifts = () =>{
    return(
        <div className="diwali-page">
            <HeroSlider data={heroSlider} />
            <div className="our-features"><DiwaliFeatures /></div>
            {/* PLACEHOLDER */}
            <PopularKit title='Most Popular Diwali Kit' navItems={popularKitData} />
            <SearchByPrice featureData={priceData} title='Search By Price' featureOptions={priceOptions} />
            <SearchByCategory featureData={categoryData} title='Search By Category' featureOptions={categoryOptions} />
            <RedeemDiwaliGift img='/unique-tech-platform-diwali.jpg' title="Redeem Your Diwali <span className='title-underline zero'>Gift Online</span>" description="Try the FOXBOX Reqrds Online Platform and automate Diwali Gifts Distribution hassle free." link="https://www.brandstik.com/platform/welcome-kit-redemption-platform/1" />
            {/* PLACEHOLDER */}
            <Footer  preFooterData={preFooterInternationalData} />
        </div>
    )
}

export default DiwaliGifts