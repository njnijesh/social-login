import { useContext } from "react";

import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import { UserContext } from "./context/user/UserContextProvider";

function App() {
  // Get user from user context and render login page or home page accordingly
  const { user } = useContext(UserContext);

  return <div className="App">{!user.loggedInBy ? <Login /> : <Home />}</div>;
}

export default App;
