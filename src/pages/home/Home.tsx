import { useEffect } from "react";
import { Container } from "./styles";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const navigate = useNavigate();
  const { logout } = useAuth0();
  const localUser = localStorage.getItem("user");

  useEffect(() => {
    let user: any;
    if (localUser) {
      user = JSON.parse(localUser);
    }
    console.log(user);
    if (!user) {
      navigate("/login");
    }
  }, [navigate, localUser]);
  // Contexts and Hooks

  // When user clicks on logout button we will check which login method was used
  // to login and we will logout accordingly.
  const handleLogoutClick = () => {
    logout({ logoutParams: { returnTo: `${window.location.origin}/logout` } });
  };
  return (
    <Container>
      {/* <h3 style={{ maxWidth: "60%", margin: "0 auto" }}>{localUser}</h3> */}
      {/* <p>Your email is {user?.email}</p> */}
      <Button label="Logout" onClick={handleLogoutClick} classNames="logout" />
    </Container>
  );
};
export default Home;
