import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import Academics from "./pages/Academics";
import Gallery from "./pages/Gallery";

function App() {
  return (
   <>
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/academics" element={<Academics/>}/>
    <Route path="/gallery" element={<Gallery />}/>

   </Routes>
   </>
  );
}

export default App;