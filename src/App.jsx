import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Register from "./pages/Register";
import RegistrationsGoogle from "./pages/RegistrationsGoogle";
import RoomAllocation from "./pages/RoomAllocation";
import OrganizingCommittee from "./pages/OrganizingCommittee";
import Facilitators from "./pages/Facilitators";
import Store from "./pages/Store";
import "./App.css";

function AppContent() {
  return (
    <div className="App">
      <ScrollToTop />
      <video autoPlay loop muted playsInline className="app-background-video">
        <source src="/video/313130.webm" type="video/webm" />
      </video>
      <div className="video-overlay"></div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/registrationsgoogle"
            element={<RegistrationsGoogle />}
          />
          <Route path="/room-allocation" element={<RoomAllocation />} />
          <Route
            path="/organizing-committee"
            element={<OrganizingCommittee />}
          />
          <Route path="/facilitators" element={<Facilitators />} />
          <Route path="/merch" element={<Store />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
