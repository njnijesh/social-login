import axios from "axios";
import { useEffect, useState } from "react";
// This hook is used to login to instagram and get the user data. Because we do not have a backend
// and ssl certificate, we are using localhost as the redirect uri. This is not recommended for production. In production, you should use a backend to handle the redirect uri and get the access token.

const useInstagramLogin = () => {
  // const login = () => {
  //   const authorizeUrl = `https://api.instagram.com/oauth/authorize
  //   ?client_id=701579268297786
  //   &redirect_uri=${window.location.origin}/login/callback/
  //   &scope=user_profile,user_media
  //   &response_type=code`;
  //   window.location.href = authorizeUrl;
  // };
  // return { login };
};
export default useInstagramLogin;
