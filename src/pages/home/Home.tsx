import { useContext } from "react";

import { Container } from "./styles";
import Button from "../../components/button";
import useTwitchLogin from "../../hooks/useTwitchLogin";
import useFacebookLogin from "../../hooks/useFacebookLogin";
import { UserContext } from "../../context/user/UserContextProvider";

const Home = () => {
  // Contexts and Hooks
  const { user, setUser } = useContext(UserContext);
  const { logout: logoutWithFacebook } = useFacebookLogin();
  const { logout: logoutWithTwitch } = useTwitchLogin();

  // When user clicks on logout button we will check which login method was used
  // to login and we will logout accordingly.
  const handleLogoutClick = () => {
    const loggedInBy = user.loggedInBy;
    localStorage.removeItem("user");
    if (loggedInBy === "facebook") {
      logoutWithFacebook();
    }
    if (loggedInBy === "google") {
      window.google.accounts.id.disableAutoSelect();
      setUser({ name: "" });
    }
    if (loggedInBy === "twitch") {
      logoutWithTwitch();
      setUser({ name: "" });
    }
  };
  return (
    <Container>
      <h3>Logged In as : {user?.name}</h3>
      <p>Your email is {user.email}</p>
      <Button label="Logout" onClick={handleLogoutClick} classNames="logout" />
    </Container>
  );
};
export default Home;
