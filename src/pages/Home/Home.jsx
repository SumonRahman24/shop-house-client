import { useLoaderData } from "react-router-dom";
import Products from "../../components/Products/Products";

const Home = () => {
  const { count } = useLoaderData();

  return (
    <div>
      <Products count={count} />
    </div>
  );
};

export default Home;
