import { useEffect } from "react";
import useInstagramLogin from "../../hooks/useInstgramLogin";

const InstagramLogin = () => {
  const { login } = useInstagramLogin();
  useEffect(() => {
    login();
  }, []);
  return null;
};
export default InstagramLogin;
