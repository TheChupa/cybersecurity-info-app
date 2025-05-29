import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ResourcesPage from "./pages/ResourcesPage.jsx";
import "./App.css";
import AuditForm from "./pages/AuditForm.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import NavBar from "./component/Navbar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./component/Footer.jsx";
import CyberTraining from "./pages/CyberTraining.jsx";
import TrainingProgram from "./pages/TrainingProgram.jsx";
import ThankYouPage from "./pages/ThankYouPage.jsx";

function App() {
  return (
    <>
      
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources/AllResources" element={<ResourcesPage />} />
        <Route path="/Audit" element={<AuditForm />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Training-Room" element={<CyberTraining />}/>
        <Route path="/Training-Room/:programName" element={<TrainingProgram/>}/>
        <Route path="/Thank-you" element={<ThankYouPage/>}/>
        </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
