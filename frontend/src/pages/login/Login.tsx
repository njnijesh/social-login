// import GoogleButton from "../../components/social-buttons/Google";
// import TwitchButton from "../../components/social-buttons/Twitch";
// import FacebookIcon from "../../components/social-buttons/Facebook";
// import InstagramButton from "../../components/social-buttons/Instagram";
// import LinkedInButton from "../../components/social-buttons/LinkedIn";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
// The login page contains all the social buttons.
const Login = () => {
  const { loginWithRedirect } = useAuth0();
  useEffect(() => {
    loginWithRedirect();
  }, [loginWithRedirect]);
  // return (
  //   <>
  //     <h3>Welcome to Social Login</h3>
  //     <TwitchButton />
  //     <InstagramButton />
  //     <FacebookIcon />
  //     <LinkedInButton />
  //     <GoogleButton />
  //   </>
  // );
  return null;
};
export default Login;
