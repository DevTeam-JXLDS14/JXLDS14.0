import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import RegistrationsGoogle from "./pages/RegistrationsGoogle";
import OrganizingCommittee from "./pages/OrganizingCommittee";
import Facilitators from "./pages/Facilitators";
import Store from "./pages/Store";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <video autoPlay loop muted playsInline className="app-background-video">
          <source src="/video/313130.webm" type="video/webm" />
        </video>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/registrationsgoogle"
              element={<RegistrationsGoogle />}
            />
            <Route
              path="/organizing-committee"
              element={<OrganizingCommittee />}
            />
            <Route path="/facilitators" element={<Facilitators />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
