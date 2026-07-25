import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import Academics from "./pages/Academics";

function App() {
  return (
   <>
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<AboutPage/>}/>
    <Route path="/academics" element={<Academics/>}/>
    
   </Routes>
   </>
  );
}

export default App;