import Footer from "../static/Footer";
import Header from "../static/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="absolute w-full">
        <Header />
      </div>

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
