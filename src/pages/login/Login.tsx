import GoogleButton from "../../components/social-buttons/Google";
import TwitchButton from "../../components/social-buttons/Twitch";
import FacebookIcon from "../../components/social-buttons/Facebook";
import InstagramButton from "../../components/social-buttons/Instagram";
import LinkedInButton from "../../components/social-buttons/LinkedIn";

// The login page contains all the social buttons.
const Login = () => {
  return (
    <>
      <h3>Welcome to Social Login</h3>
      <FacebookIcon />
      <TwitchButton />
      <LinkedInButton />
      <InstagramButton />
      <GoogleButton />
    </>
  );
};
export default Login;
