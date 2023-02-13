import { useEffect } from "react";
import useInstagramLogin from "../../hooks/useInstgramLogin";
import Button from "../button";
const Instagram = () => {
  const { login } = useInstagramLogin();

  useEffect(() => {
    const instagramScript = document.createElement("script");
    instagramScript.src = "https://www.instagram.com/embed.js";
    instagramScript.async = true;
    instagramScript.defer = true;
    document.body.appendChild(instagramScript);
  }, []);
  return (
    <Button
      label="Continue with Instagram"
      onClick={login}
      classNames="instagram"
    />
  );
};
export default Instagram;
