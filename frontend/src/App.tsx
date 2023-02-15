import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import InstagramLogin from "./pages/InstagramLogin";
import Login from "./pages/login";
import LoginSuccess from "./pages/login/LoginSucess";
import Logout from "./pages/logout";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/success" element={<LoginSuccess />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login/manual" element={<InstagramLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
