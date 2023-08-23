import React, { useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider/HeroImageSlider";
import DiwaliFeatures from "./Features";
import { heroSlider } from "./data/HeroSliderData";
import { ContentWithSidebar as PopularKit } from "../../components/Page/ContentWithSidebar/ContentWithSidebar";
import { popularKitData } from "./data/PopularKit";
import { Feature as SearchByPrice, Feature as SearchByCategory } from "../Feature";
import { priceData, priceOptions } from "./data/SearchByPrice";
import { categoryData, categoryOptions } from "./data/SearchByCategory";
import { UniqueTechPlatform as RedeemDiwaliGift } from "../../components/Page/EmployeeKit/UniquePlatform";
import { preFooterInternationalData } from "../InternationalWelcomeKit/preFooterData";
import Footer from "../../components/Footer/Footer";
import RequestDemo from "../../components/RequestDemo/RequestDemo";

const DiwaliGifts = () => {
  const [productByPrice, setProductByPrice] = useState([]);
  const [productByCategory, setProductByCategory] = useState([]);

  const getProductByPrice = async (priceRange = '101-250') => {
    try {
      const response = await fetch(
        "https://www.brandstik.com/Services/method.aspx/GetProductsByPriceOrCategory",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            category: "",
            priceRange,
          }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        const priceData = responseData?.d?.map((item) => ({
          id: `${item.ID}`,
          title: `${item.product_name}`,
          description: `${item.short_brief}`,
          img: `https://www.brandstik.com${item.image}`,
          link: `${item.slug}`,
        }));
        setProductByPrice(priceData);
      } else {
        console.error("Failed to fetch data from API");
      }
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };

  const getProductByCategory = async (category = 'Smart Devices') => {
    try {
      const response = await fetch(
        "https://www.brandstik.com/Services/method.aspx/GetProductsByPriceOrCategory",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            category,
            priceRange: "",
          }),
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        const categoryData = responseData?.d?.map((item) => ({
          id: `${item.ID}`,
          title: `${item.product_name}`,
          description: `${item.short_brief}`,
          img: `https://www.brandstik.com${item.image}`,
          link: `${item.slug}`,
        }));
        setProductByCategory(categoryData);
      } else {
        console.error("Failed to fetch data from API");
      }
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  };

  useEffect(() => {
    getProductByPrice();
    getProductByCategory();
  }, []);

  return (
    <div className="diwali-page">
      <HeroSlider data={heroSlider} />
      <div className="our-features">
        <DiwaliFeatures />
      </div>
      <RequestDemo />
      <div className="pt-5 mt-5">
      <PopularKit title="Most Popular Diwali Kit" navItems={popularKitData} />
      </div>
      <SearchByPrice
        featureData={productByPrice}
        title="Search By Price"
        featureOptions={priceOptions}
        apiCaller={getProductByPrice}
      />
      <SearchByCategory
        featureData={productByCategory}
        title="Search By Category"
        featureOptions={categoryOptions}
        apiCaller={getProductByCategory}
      />
      <RedeemDiwaliGift
        img="/unique-tech-platform-diwali.jpg"
        title="Redeem Your Diwali <span className='title-underline zero'>Gift Online</span>"
        description="Try the FOXBOX Rewards Online Platform and automate Diwali Gifts Distribution hassle-free."
        link="https://www.brandstik.com/platform/welcome-kit-redemption-platform/1"
      />
      <Footer preFooterData={preFooterInternationalData} />
    </div>
  );
};

export default DiwaliGifts;
