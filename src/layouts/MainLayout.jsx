import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Slider from "../components/Header/Slider";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Outlet />
    </div>
  );
};

export default MainLayout;
