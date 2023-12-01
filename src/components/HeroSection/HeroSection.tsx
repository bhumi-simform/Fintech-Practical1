import { Button, Image } from "antd";
import Header from "./Header";
import BannerImage from "../../assets/images/banner-image.jpg";
import "./HeroSection.scss";
const HeroSection = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <section className="banner-section">
        <Image preview={false} src={BannerImage} alt="Background Image" className="banner-bg-image"></Image>
        <div className="container">
          <div className="content-wrapper">
            <span>Explore any kind of furnitures</span>
            <h1>
            Better Furniture Better Living
            </h1>
            <Button className="btn has-arrow">Check our projects</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
