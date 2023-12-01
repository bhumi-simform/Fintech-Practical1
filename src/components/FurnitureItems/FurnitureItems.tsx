import FurnitureItem from "./FurnitureItem";
import OfficeChair from "../../assets/Products/officechair.jpg";
import Storage from "../../assets/Products/storage.jpg";
import Decoration from "../../assets/Products/decoration.jpg";
import Lightings from "../../assets/Products/lightings.jpg";
import BedsideTable from "../../assets/Products/bedside-table.jpg";
import { Carousel, Button } from "antd";
import "./Furniture.scss";
import "../../assets/scss/slider.scss";

const Items = [
  {
    imagePath: OfficeChair,
    productType: "Office chair",
    productName: "Cream Office Chair",
    size: "40 x 50 x 60",
    price: "$ 50,00",
  },
  {
    imagePath: Storage,
    productType: "Storage",
    productName: "Celestra Grey Cabinet",
    size: "40 x 50 x 60",
    price: "$ 35,05",
  },
  {
    imagePath: Decoration,
    productType: "Decoration",
    productName: "Fejka Artificial Plant",
    size: "40 x 50 x 60",
    price: "$ 5,00",
  },
  {
    imagePath: Lightings,
    productType: "Lightings",
    productName: "White Standing Lamp",
    size: "40 x 50 x 60",
    price: "$ 23,58",
  },
  {
    imagePath: BedsideTable,
    productType: "Bedside Table",
    productName: "Brown Wood Table",
    size: "40 x 50 x 60",
    price: "$ 23,58",
  },
  {
    imagePath: OfficeChair,
    productType: "Office chair",
    productName: "Cream Office Chair",
    size: "40 x 50 x 60",
    price: "$ 50,00",
  },
  {
    imagePath: Storage,
    productType: "Storage",
    productName: "Celestra Grey Cabinet",
    size: "40 x 50 x 60",
    price: "$ 35,05",
  },
  {
    imagePath: Decoration,
    productType: "Decoration",
    productName: "Fejka Artificial Plant",
    size: "40 x 50 x 60",
    price: "$ 5,00",
  },
  {
    imagePath: Lightings,
    productType: "Lightings",
    productName: "White Standing Lamp",
    size: "40 x 50 x 60",
    price: "$ 23,58",
  },
];

const RightArrow = () => {
  return <Button size="middle" />;
};

const LeftArrow = () => {
  return <Button size="middle" />;
};
const FurnitureItems = () => {
  return (
    <section className="best-seller-section">
      <div className="container">
        <h2>Best seller products</h2>
        <div className="carousel-wrappper">
          <Carousel
            prevArrow={LeftArrow()}
            nextArrow={RightArrow()}
            arrows={true}
            slidesToShow={5}
            dots={false}
            infinite={false}
          >
            {Items.map((data, index) => (
              <FurnitureItem
                key={index}
                imagePath={data.imagePath}
                productType={data.productType}
                productName={data.productName}
                size={data.size}
                price={data.price}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default FurnitureItems;
