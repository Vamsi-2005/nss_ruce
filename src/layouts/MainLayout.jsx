import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Scroll to top on route change */}
      <ScrollToTop />

      {/* Header */}
      <Header />

      {/* MAIN CONTENT (FIXED OFFSET FOR HEADER) */}
      <main className="flex-grow container mx-auto px-4 py-6 mt-[120px]">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default MainLayout;