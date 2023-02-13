//update
/// <reference path="../instagram.d.ts" />
import { useState } from "react";

const useInstagramLogin = () => {
  console.log(`https://${process.env.VERCEL_URL}/login`);
  const [userData, setUserData] = useState<any>(null);
  console.log(userData);
  const login = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.Instagram.init({
      clientId: "701579268297786",
      redirectUri: `https://${process.env.VERCEL_URL}/login`,
      scope: ["user_profile", "user_media"],
    });
    window.Instagram.login(({ access_token }: { access_token: any }) => {
      setUserData({ access_token });
    });
  };
  return { login };
};
export default useInstagramLogin;
