import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import Academics from "./pages/Academics";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
   <>
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/academics" element={<Academics/>}/>
    <Route path="/gallery" element={<Gallery />}/>
    <Route path="/contact" element={<Contact />}/>

   </Routes>
   <Footer/>
   </>
  );
}

export default App;