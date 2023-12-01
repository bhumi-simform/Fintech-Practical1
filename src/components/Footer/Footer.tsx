import { Typography } from "antd";
const { Link } = Typography;
import { Image } from "antd";
import FooterLogo from "../../assets/images/footer-logo.svg";
import { List } from "antd";
import MapPin from "../../assets/images/map-pin-icon.svg";
import ContactPin from "../../assets/images/contact-icon.svg";
import IgIcon from "../../assets/images/instagram-icon.svg";
import FbIcon from "../../assets/images/fb-icon.svg";
import LinkedinIcon from "../../assets/images/linkedin-icon.svg";
import TwitterIcon from "../../assets/images/twitter-icon.svg";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-top-wrapper">
            <div className="detail-block">
              <div className="logo-block">
                <Link href="#" target="_blank" title="Coca">
                  <Image src={FooterLogo} preview={false} />
                </Link>
                <p>Better Furniture, Better Living</p>
              </div>
              <List className="contact-listing">
                <List.Item>
                  <span className="contact-title">
                    <Image src={MapPin} preview={false} />
                    Address
                  </span>
                  <div className="contact-detail">
                    <address>7319 Wagon Lane Bradenton, FL 34203</address>
                  </div>
                </List.Item>
                <List.Item>
                  <span className="contact-title">
                    <Image src={ContactPin} preview={false} />
                    Contact Us
                  </span>
                  <div className="contact-detail">
                    <Link href="#" target="_blank" title="Mail us">
                      hellosansbrothers@gmail.com
                    </Link>
                  </div>
                </List.Item>
              </List>
            </div>
            <div className="listing-block">
              <div className="listing-wrapper">
                <div className="listing">
                  <p className="list-title">Website</p>
                  <List>
                    <List.Item>
                      <Link href="#" title="Home">
                        Home
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link href="#" title="About us">
                        About us
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link href="#" title="Services">
                        Services
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link href="#" title="Contact Us">
                        Contact Us
                      </Link>
                    </List.Item>
                  </List>
                </div>
                <div className="listing">
                  <p className="list-title">Products</p>
                  <List>
                    <List.Item>
                      <Link href="#" title="Tables">
                        Tables
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link href="#" title="Chairs">
                        Chairs
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link href="#" title="Storages">
                        Storages
                      </Link>
                    </List.Item>
                    <List.Item>
                      <Link href="#" title="Decorations">
                        Decorations
                      </Link>
                    </List.Item>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-wrapper">
            <p className="copy-right">© Sans Brothers</p>
            <List className="terms-listing">
              <List.Item>
                <Link href="#" title="Privacy and Terms">
                  Privacy and Terms
                </Link>
              </List.Item>
              <List.Item>
                <Link href="#" title="Legal Notice">
                  Legal Notice
                </Link>
              </List.Item>
              <List.Item>
                <Link href="#" title="Languanges">
                  Languanges
                </Link>
              </List.Item>
            </List>
            <List className="social-lisiting">
              <List.Item>
                <Link href="#" target="_blank" title="Instagram">
                  <Image src={IgIcon} preview={false} />
                </Link>
              </List.Item>
              <List.Item>
                <Link href="#" target="_blank" title="FaceBook">
                  <Image src={FbIcon} preview={false} />
                </Link>
              </List.Item>
              <List.Item>
                <Link href="#" target="_blank" title="LinkedIn">
                  <Image src={LinkedinIcon} preview={false} />
                </Link>
              </List.Item>
              <List.Item>
                <Link href="#" target="_blank" title="Twiiter">
                  <Image src={TwitterIcon} preview={false} />
                </Link>
              </List.Item>
            </List>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
