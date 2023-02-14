import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import InstagramLogin from "./pages/login/Instagram";
import LoginSuccess from "./pages/login/LoginSucess";
import Logout from "./pages/login/Logout";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/success" element={<LoginSuccess />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/login/instagram" element={<InstagramLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
