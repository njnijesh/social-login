import { useEffect, useState } from "react";
import useInstagramLogin from "../../hooks/useInstgramLogin";
import Button from "../button";
import Icon from "../../icons/InstagramSvg";
const Instagram = () => {
  const { login } = useInstagramLogin();
  return (
    <Button
      label="Continue with Instagram"
      onClick={login}
      classNames="instagram"
      icon={<Icon />}
    />
  );
};
export default Instagram;
