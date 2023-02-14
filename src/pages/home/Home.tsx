// import { useContext, useEffect } from "react";
import { useEffect } from "react";

import { Container } from "./styles";
import Button from "../../components/button";
// import useTwitchLogin from "../../hooks/useTwitchLogin";
// import useFacebookLogin from "../../hooks/useFacebookLogin";
// import { UserContext } from "../../context/user/UserContextProvider";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const navigate = useNavigate();
  const { logout } = useAuth0();
  const localUser = localStorage.getItem("user");
  let user: any;
  if (localUser) {
    user = JSON.parse(localUser);
  }
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);
  // Contexts and Hooks
  // const { user, setUser } = useContext(UserContext);
  // const { logout: logoutWithFacebook } = useFacebookLogin();
  // const { logout: logoutWithTwitch } = useTwitchLogin();

  // When user clicks on logout button we will check which login method was used
  // to login and we will logout accordingly.
  const handleLogoutClick = () => {
    logout({ logoutParams: { returnTo: `${window.location.origin}/logout` } });
  };
  return (
    <Container>
      <h3>Logged In as : {user?.name}</h3>
      <p>Your email is {user?.email}</p>
      <Button label="Logout" onClick={handleLogoutClick} classNames="logout" />
    </Container>
  );
};
export default Home;
