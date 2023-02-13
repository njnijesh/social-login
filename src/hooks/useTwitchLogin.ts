//Twitch was a bit different from facebook and google. We will first need to get a accessToken,
// and then we will have get the user details.
import axios from "axios";
import { useContext, useState, useEffect } from "react";

import { UserContext } from "../context/user/UserContextProvider";

const useTwitchLogin = () => {
  // States And Functions
  const clientId: string = process.env.REACT_APP_TWITCH_CLIENT_ID || "";
  if (!clientId) throw new Error("No client id provided for twitch.");
  const [accessToken, setAccessToken] = useState("");
  const { user, setUser } = useContext(UserContext);

  //Variables
  const currentUrl = window.location.href.endsWith("/") //Checks if the url ends with a slash and removes it if it does
    ? window.location.href.slice(0, -1)
    : window.location.href;

  //Get the access token from the url
  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.substring(1));
    const token = params.get("access_token");
    if (token) {
      setAccessToken(token);
    }
  }, [setAccessToken]);

  //Get the user data from the api
  useEffect(() => {
    if (!user.name && accessToken) {
      axios
        .get("https://api.twitch.tv/helix/users", {
          headers: {
            Authorization: "Bearer " + accessToken,
            "Client-Id": clientId,
          },
        })
        .then((response) => {
          const user = response.data.data[0];
          setUser({
            name: user.display_name,
            email: user.email,
            loggedInBy: "twitch",
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [accessToken, user, setUser, clientId]);

  //Login and get the access token
  const login = async () => {
    const redirectUri = encodeURIComponent(currentUrl);
    const twitchLoginUrl = `https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=0jrcq7is4eye29wi144dbwizkwgloh&redirect_uri=${redirectUri}&scope=user_read`;
    window.location.href = twitchLoginUrl;
  };

  //Logout and revoke the access token
  const logout = () => {
    window.location.href = "/";
    axios
      .delete("https://id.twitch.tv/oauth2/revoke", {
        params: {
          client_id: clientId,
          token: accessToken,
        },
      })
      .then((response) => {
        console.log("Access token revoked successfully.");
      })
      .catch((error) => {
        console.error("Error revoking access token:", error);
      });
  };
  return { login, logout };
};
export default useTwitchLogin;
