import Hero from "./Components/Hero";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import Carousel from "./Components/Carousel";
import Card from "./Components/Card";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Testimonal from "./Components/Testimonal";
import Navbar from "./Components/Navbar";
import "./Components/styles.css";
import PersonalInfoForm from "./pages/PersonalInfoForm";
import EducationDetailsForm from "./pages/EducationDetailsForm";
import ExtraDetailsForm from "./pages/ExtraDetailsForm";
// import CollegePred from "./pages/CollegePred";
import Mmind from "./pages/MindMap";
import Scholarpage from "./pages/ScholarShip";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Carousel />
                <Card />
                <Testimonal />
                <Footer />
              </>
            }
          ></Route>
          <Route path="/personalInfo" element={<PersonalInfoForm />} />
          <Route path="/educationalInfo" element={<EducationDetailsForm />} />
          <Route path="/extraInfo" element={<ExtraDetailsForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/collegeprediction" element={<CollegePred />} /> */}
          <Route path="/careermap" element={<Mmind />} />
          <Route path="/scholarship" element={<Scholarpage />} />
        </Routes>
      </Router>
      <Toaster />
    </div>
  );
}

export default App;
