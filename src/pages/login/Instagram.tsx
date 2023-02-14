import axios from "axios";
import { useEffect, useState } from "react";
// import useInstagramLogin from "../../hooks/useInstgramLogin";

const InstagramLogin = () => {
  const [accessToken, setAccesstoken] = useState<null | string>(null);
  useEffect(() => {
    if (!accessToken) {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get("code");
      if (!code) throw new Error("No code found in url");
      if (code) {
        axios
          .post("https://api.instagram.com/oauth/access_token", {
            client_id: "701579268297786",
            client_secret: "2aa899c05fa0b5119121cdb7f9603975",
            grant_type: "authorization_code",
            redirect_uri: `${window.location.origin}/login/callback/`,
            code: code,
          })
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }, []);
  return null;
};
export default InstagramLogin;
