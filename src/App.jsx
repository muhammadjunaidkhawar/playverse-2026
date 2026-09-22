import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

import Home from "./Pages/Home";
import Sports from "./Pages/Sports";
import Championship from "./Pages/Championship";
import Rules from "./Pages/Rules";
import Schedule from "./Pages/Schedule";
import Registration from "./Pages/Registration";
import NotFound from "./Pages/NotFound";

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