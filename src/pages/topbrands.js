import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import StudyWithFM from "../images/Study.png";
import MbEduconsult from "../images/mblogo.png";
import Photoruum from "../images/photoruum.jpeg";
import Spacestylist from "../images/spacestylist.png";
import i4Tech from "../images/i4tech.png";
import Youthup from "../images/Youthup.webp";
import PraiseLogo from "../images/Praiselogo.png"


const brands = [
  { name: "StudyWithFM", src: StudyWithFM },
  { name: "Mb Educonsullt", src: MbEduconsult },
  { name: "Photoruum", src: Photoruum },
  { name: "Spacestylist", src: Spacestylist },
  { name: "i4Tech Integrated Services", src: i4Tech },
  { name: "Youthup", src: Youthup },
  { name: "PraiseNpam", src: PraiseLogo },
  
];

const TopBrands = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className="text-center py-10 overflow-hidden">
      <h2 className="text-2xl font-semibold mb-6">Top Brands I have Worked With</h2>
      <Slider {...settings}>
        {brands.map((brand, index) => (
          <div key={index} className="px-2">
            <div className="bg-white p-4 rounded-lg text-center">
              <img src={brand.src} alt={brand.name} className="h-12 mx-auto" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopBrands;
