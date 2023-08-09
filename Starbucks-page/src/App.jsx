import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Singin from "./pages/Singin";
import NoFoundPage from "./pages/NoFoundPage";

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/singin" element={<Singin />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NoFoundPage/>} />
    </Routes>
     
    </div>
  );
}

export default App;
