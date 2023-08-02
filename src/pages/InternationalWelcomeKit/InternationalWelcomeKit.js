import HeroSlider from "../../components/HeroSlider/HeroImageSlider";
import Advantage from "../../components/Page/InternationalKit/Advantage";
import { heroSliderInternationalWelcomeKit } from "./HeroSliderData"

const InternationalWelcomeKit = () => {
    return (
        <>
            <HeroSlider data={heroSliderInternationalWelcomeKit} />
            <Advantage />
        </>
    )
}

export default InternationalWelcomeKit