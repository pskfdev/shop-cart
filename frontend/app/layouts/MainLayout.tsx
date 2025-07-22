import { Outlet } from "react-router";
//Components
import Navbar from "~/components/navbar/Navbar";
import Footer from "~/components/footer/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-200">
      <Navbar />

      <div className="grow">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export default MainLayout;
