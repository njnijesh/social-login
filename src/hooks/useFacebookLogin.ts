import { useContext } from "react";
import { UserContext } from "../context/user/UserContextProvider";
import * as types from "./types";

type FacebookSDK = () => { login: Function; logout: Function };

const useFacebookLogin: FacebookSDK = () => {
  const { setUser } = useContext(UserContext);

  // Handle the response from facebook
  const handleResponse = (response: any) => {
    FB.api(
      "/me",
      { fields: "email, name" },
      (userInfo: types.FacebookResponseTypes) => {
        setUser({
          id: response.authResponse.userID,
          email: userInfo.email,
          name: userInfo.name,
          loggedInBy: "facebook",
        });
      }
    );
  };

  // Logout function with facebook
  const logout = () => {
    FB.logout((response: any) => {
      setUser({ name: "" });
    });
  };

  // Login function with facebook
  const login = () => {
    FB.login(handleResponse);
  };

  // Return the user info and the login function
  return { login, logout };
};
export default useFacebookLogin;
