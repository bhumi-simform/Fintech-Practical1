import {  Image, Col, Row,  Typography, Button   } from "antd";
import SiteLogo from "../../assets/images/site-logo.svg";

const { Link } = Typography;
const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <Row gutter={2} justify="space-between" align="middle">
            <Col className="gutter-row"  flex="auto" >
              <Row gutter={65} align="middle" className="main-grid" >
                <Col className="gutter-row logo-wrapper"  span={4} >
                    <Link href="https://ant.design" target="_blank">
                      <Image preview={false} src={SiteLogo} alt="Featured Image" title="COCA"></Image>
                    </Link>
                </Col>
                <Col className="gutter-row"  span={10} >
                  <Row gutter={32} align="middle" >
                    <Col className="gutter-row"  span={2.5}>
                        <Link href="https://ant.design" target="_blank" title="About" className=" active">
                        About
                        </Link>
                      </Col>
                      <Col className="gutter-row"  span={2.5}>
                        <Link href="https://ant.design" target="_blank" title="Blog">
                        Blog
                        </Link>
                      </Col>
                      <Col className="gutter-row"  span={2.5}>
                        <Link href="https://ant.design" target="_blank" title="Contact">
                        Contact
                        </Link>
                      </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col className="gutter-row" flex="113px" >
              <Button className="rounded-btn btn">Sign In</Button>
            </Col>
        </Row>
      </div>
    </header>
  );
};

export default Header;
