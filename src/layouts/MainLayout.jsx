import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-10">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
