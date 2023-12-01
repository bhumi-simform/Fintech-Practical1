import { Button, Radio, RadioChangeEvent } from "antd";
import { useState } from "react";
import "./Product.scss";

const Product = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <section className="sofa-product-section">
      <div className="container">
        <div className="content-wrapper">
          <p className="title-top">Newcomer product</p>
          <h2>2 seater Sofa</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            luctus malesuada et volutpat, pellentesque dignissim suscipit.{" "}
          </p>
          <div className="radio-wrapper">
            <p className="radio-label">Avaliable Colors</p>
            <Radio.Group onChange={onChange} value={value} >
              <Radio value={1} className="dark-green-bg"/>
              <Radio value={2} className="orange-bg"/>
              <Radio value={3} className="light-brown-bg"/>
              <Radio value={4} className="cream-bg"/>
              <Radio value={5} className="black-bg"/>
            </Radio.Group>
            <Button className="btn has-arrow">Shop Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
