import { Button } from "antd";
import { Typography } from "antd";
const { Link } = Typography;
import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <section className="contact-us-section">
      <div className="container">
        <div className="content-wrapper">
          <h2>
            We pay details in <span>every our work</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit
            et nisl tristique nulla. Nisl, egestas molestie vestibulum lectus
            habitasse donec morbi. At est parturient id eu ut.
          </p>
          <div className="link-wrapper">
            <Button className="btn" title="Contact Us">
              Contact Us
            </Button>
            <Link href="#" target="_blank" title="View Projects">
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
