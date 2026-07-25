import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/About";

function App() {
  return (
   <>
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<AboutPage/>}/>
   </Routes>
   </>
  );
}

export default App;