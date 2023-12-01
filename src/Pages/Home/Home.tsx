import ClientsReviews from "../../components/ClientsReviews/ClientsReviews";
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from "../../components/Footer/Footer";
import FurnitureItems from "../../components/FurnitureItems/FurnitureItems";
import FurniturePros from "../../components/FurniturePros/FurniturePros";
import HeroSection from "../../components/HeroSection/HeroSection";
import LatesProjects from "../../components/LatesProjects/LatesProjects";
import Product from "../../components/NewestProduct/Product";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FurniturePros />
      <FurnitureItems />
      <LatesProjects />
      <Product />
      <ClientsReviews />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
