import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reservation from "./pages/reservation/Reservation";
import Admin from "./pages/admin/Admin";
import Home from "./pages/home/Home";
import LoginRegister from "./pages/connexion-inscription/LoginRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/loginRegister" element={<LoginRegister />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
