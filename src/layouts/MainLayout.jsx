import { Outlet } from "react-router-dom";
import Slider from "../components/Header/Slider";
import Navbar from "../components/Header/Navbar";

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
