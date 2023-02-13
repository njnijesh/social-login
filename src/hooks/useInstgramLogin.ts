/// <reference path="../instagram.d.ts" />
import { useState } from "react";

const useInstagramLogin = () => {
  const [userData, setUserData] = useState<any>(null);
  console.log(userData);
  const login = () => {
    const redirectUri = encodeURIComponent(
      "https://social-login-topaz.vercel.app/"
    );

    const twitchLoginUrl = `https://api.instagram.com/oauth/authorize
  ?client_id=701579268297786
  &redirect_uri=${redirectUri}
  &scope=user_profile,
  &response_type=code`;
    window.location.href = twitchLoginUrl;
  };
  return { login };
};
export default useInstagramLogin;
