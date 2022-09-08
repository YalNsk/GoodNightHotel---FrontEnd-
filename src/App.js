import "./styles/App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Reservation from "./pages/reservation/Reservation";
import Admin from "./pages/admin/Admin";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search.jsx";
import LoginRegister from "./pages/connexion-inscription/LoginRegister";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/loginRegister" element={<LoginRegister />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/*" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
