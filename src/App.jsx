import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Sports from "./pages/Sports";
import Championship from "./pages/Championship";
import Rules from "./pages/Rules";
import Schedule from "./pages/Schedule";
import Registration from "./pages/Registration";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#05080d] text-white">
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/championship" element={<Championship />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/registration" element={<Registration />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;