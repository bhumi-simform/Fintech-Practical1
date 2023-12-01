import { Col } from "antd";
import React from "react";
import { Card } from "antd";
import { Typography } from "antd";
const { Link } = Typography;
import { Image } from "antd";
import OrangeArrow from "../../assets/images/arrow-right-icon-orange.svg";

interface BenefitContentItemProps {
  icon?: string;
  title: string;
  description: string;
}

const ProsData: React.FC<BenefitContentItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Col span={8}>
      <Card className="what-we-provide-inner">
        <Image className="icon-wrapper" preview={false} src={icon} />
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="link-wrapper">
          <Link href="#" title="See more">
            See more <Image preview={false} src={OrangeArrow} />
          </Link>
        </div>
      </Card>
    </Col>
  );
};

export default ProsData;
