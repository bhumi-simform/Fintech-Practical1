import Review from "./Review";
import girlImage from "../../assets/Clients/Rectangle 6905.svg";
import boyImage from "../../assets/Clients/Rectangle 6905 (1).svg";
import { Carousel , Button } from 'antd';
import '../../assets/scss/slider.scss';
import './ClientsReviews.scss'
const Items = [
  {
    imagePath: girlImage,
    title:
      "As expected, 10 years experience on furniture business will not disappointing at all",
    content:
      "As they said, their 10 years of experience in furniture and interior business is real. They work it professionally and friendly at the same time and of course the results is beyond my expectations.",
    clientName: "Roy Rakabuming",
    numberProp: 1,
  },
  {
    imagePath: boyImage,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vel odio tortor amet sagittis sed. ",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie est, dictum pellentesque turpis. Facilisis id cras amet tortor. Porttitor nascetur eget sit eget massa consectetur. Fringilla viverra sit magna.",
    clientName: "Dafit Bekam",
    numberProp: 2,
  },
  {
    imagePath: girlImage,
    title:
      "As expected, 10 years experience on furniture business will not disappointing at all",
    content:
      "As they said, their 10 years of experience in furniture and interior business is real. They work it professionally and friendly at the same time and of course the results is beyond my expectations.",
    clientName: "Roy Rakabuming",
    numberProp: 3,
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
const ClientsReviews = () => {
  return (

    <section className="best-seller-section">
      <div className="container">
      <h2>What our clients say</h2>
      <div className="carousel-wrappper">
            <Carousel  prevArrow={LeftArrow()} nextArrow={RightArrow()} arrows={true} slidesToShow={1.4} dots={false}  infinite={false}>
            {Items.map((data, index) => (
          <Review
            key={index}
            imagePath={data.imagePath}
            title={data.title}
            content={data.content}
            clientName={data.clientName}
            numberProp={data.numberProp}
          />
        ))}
          </Carousel>
          </div>
      </div>
    </section>
  );
};

export default ClientsReviews;
