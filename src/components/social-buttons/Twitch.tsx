import useTwitchLogin from "../../hooks/useTwitchLogin";
import Icon from "../../icons/TwitchSvg";
import Button from "../button";

const TwitchButton = () => {
  // useTwitchLogin is a custom hook that returns a login, logout function
  const { login } = useTwitchLogin();

  return (
    <Button
      label="Login with Twitch"
      onClick={login}
      icon={<Icon />}
      classNames="twitch"
    />
  );
};
export default TwitchButton;
