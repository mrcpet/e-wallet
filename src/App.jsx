import { FaRobot } from "react-icons/fa";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/Homepage";
import SettingsPage from "./pages/SettingsPage";
import AddCardPage from "./pages/AddCardPage";
import CardPage from "./pages/CardPage";
import "./App.css";

function App() {
  const currentTheme = useSelector((store) => store.theme.theme);
  return (
    <div className={`${currentTheme} app`}>
      <h1>
        WALL-E <FaRobot />
      </h1>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/settings" element={<SettingsPage />}></Route>
        <Route path="/addcard" element={<AddCardPage />}></Route>
        <Route path="/card/:id" element={<CardPage />}></Route>
      </Routes>
      <Navigation />
    </div>
  );
}

export default App;
