import { useLoaderData } from "react-router-dom";
import Products from "../../components/Products/Products";
import Slider from "./../../components/Header/Slider";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  const { count } = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Shop House</title>
      </Helmet>
      <Slider />
      <Products count={count} />
      <Footer />
    </div>
  );
};

export default Home;
