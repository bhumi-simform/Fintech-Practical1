// import { SmileOutlined, HeartOutlined, StarOutlined } from "@ant-design/icons";
import HomeIcon from "../../assets/images/home-icon-orange.svg";
import CreditCardIcon from "../../assets/images/credit-card-icon-orange.svg";
import ThumbsUpIcon from "../../assets/images/thumbs-up-icon-orange.svg";
import ProsData from "./ProsData";
import { Row } from "antd";
import "./FurniturePros.scss";
const Pros = [
  {
    icon: HomeIcon,
    title: "10 years of experience in furniture business",
    description:
      "We’re already established since 2012, and in 10 years we have lots of positive reviews and achievements",
  },
  {
    icon: CreditCardIcon,
    title: "Afforable price with world class quality",
    description:
      "Our craftsmen have lots of experience dealing with crafting furnitures and some of them have world class quality",
  },
  {
    icon: ThumbsUpIcon,
    title: "Bring your ideas into a living product",
    description:
      "Besides you can buy the existing product, you can also consultate with us also to make your dream furniture",
  },
];

const FurniturePros = () => {
  return (
    <section className="what-we-provide-section">
      <div className="container">
        <h2>What we provide</h2>
        <Row gutter={50}>
          {Pros.map((data, index) => (
            <ProsData
              key={index}
              icon={data.icon}
              title={data.title}
              description={data.description}
            />
          ))}
        </Row>
      </div>
    </section>
  );
};

export default FurniturePros;
