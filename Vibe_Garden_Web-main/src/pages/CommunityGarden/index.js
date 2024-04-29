import React from "react";
import NavBar from "../../components/Navbar";
import Hero from "../../components/Hero";
import GradientImageInfoSection from "../../components/GradientImageInfoSection";
import FourColumnVideoLayout from "../../components/FourColumnVideoLayout.js";
import BrowseByTags from "../../components/BrowseByTags";
import Footer from "../../components/Footer";
import GreenLineBreak from "../../components/GreenLineBreak";
import WhiteImageInfoSection from "../../components/WhiteImageInfoSection.js";
import ButtonAndHeading2 from "../../components/HeadingAndButton2";
import { dummyVideodata } from "../../constants/dummyVideoData";
import images from "../../constants/images";
import videos from "./categories";

const CommunityGarden = () => {
  const array4 = dummyVideodata.slice(0, 4);

  return (
    <div className="community-garden">
      <NavBar />
      <div className="bg-lightFlower ">
        <Hero
          quote2ndPart="lorem ipsum lorem ipsum.”"
          quote1stPart="“Lorem ipsum lorem ipsum lorem;"
          greenColor
          author="– Lorem Ipsum Dolar"
          heading="Lorem Ipsum"
          topPadding
        />
      </div>
      <div className="bg-gradient-green">
        <GradientImageInfoSection
          videoCardLeftMargin={"30px"}
          noButton
          heading="Coming Home Together A Beginning"
          videoImage={images.placeholder6}
          videoDuration={"3:15"}
        />
      </div>
      <FourColumnVideoLayout
        heading="Featured Tool For Connection"
        tools
        desc={`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
        et ea rebum. Stet clita kas`}
        dataArray={videos.slice(0, 4)}
      />
      <GreenLineBreak />
      <WhiteImageInfoSection
        noButton
        noHeading
        doubleHeading
        videoCardTopHeading
        bottomInfo
        vidHeading
        btnText="Take A Survey"
        videoImage={images.placeholder6}
        videoDuration="3:15"
        videoTitle="Title"
      />
      <GreenLineBreak />
      <ButtonAndHeading2 />
      <Footer />
    </div>
  );
};

export default CommunityGarden;
