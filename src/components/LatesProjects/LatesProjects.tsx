import Kitchen from "../../assets/Projects/slider-image2.svg";
import Livingroom from "../../assets/Projects/slider-image1.jpg";
import Bedroom from "../../assets/Projects/slider-image2.svg";
import ProjectItem from "./ProjectItem";
import { Carousel , Button } from 'antd';
import './LatesProjects.scss';
import '../../assets/scss/slider.scss';
const Items = [
  {
    imagePath: Kitchen,
    productType: "KITCHEN",
    productName: "Architech & Interior Design - 2023",
  },
  {
    imagePath: Livingroom,
    productType: "LIVINGROOM",
    productName: "Architech & Interior Design - 2023",
  },
  {
    imagePath: Bedroom,
    productType: "BEDROOM",
    productName: "Architech & Interior Design - 2023",
  },
  {
    imagePath: Livingroom,
    productType: "LIVINGROOM",
    productName: "Architech & Interior Design - 2023",
  },
  {
    imagePath: Kitchen,
    productType: "KITCHEN",
    productName: "Architech & Interior Design - 2023",
  },
  {
    imagePath: Bedroom,
    productType: "BEDROOM",
    productName: "Architech & Interior Design - 2023",
  },
];
const RightArrow = () => {
  return (
      <Button  size="middle"/>
  )
}

const LeftArrow = () => {
  return (
      <Button  size="middle"/>
  )
}
const LatesProjects = () => {
  return (
    <section className="latest-project-section ">
      <div className="container">
        <h2>Our lates projects</h2>
        <div className=" carousel-wrappper">
          <Carousel  prevArrow={LeftArrow()} nextArrow={RightArrow()} arrows={true} slidesToShow={3.3} dots={false} infinite={false}>
          {Items.map((data, index) => (
            <ProjectItem
              key={index}
              imagePath={data.imagePath}
              productType={data.productType}
              productName={data.productName}
            />
          ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default LatesProjects;
