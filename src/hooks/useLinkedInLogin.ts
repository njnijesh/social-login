import qs from "qs";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
// import { UserContext } from "../context/user/UserContextProvider";

const useLinkedInLogin = () => {
  const [userProfile, setUserProfile] = useState<any>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  //   const { user, setUser } = useContext(UserContext);
  console.log(accessToken);
  console.log(userProfile);
  const clientId = "78p666byb6l9xk";
  const redirectUri = "http://localhost:3000/auth/linkedin/callback";
  const responseType = "code";
  const state = "myownstate";

  useEffect(() => {
    // Check if the URL contains an authorization code
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    if (code) {
      // Exchange the authorization code for an access token
      const requestBody = {
        grant_type: "authorization_code",
        code: code,
        redirect_uri: "http://localhost:3000/auth/linkedin/callback", // Replace with your own redirect URI
        client_id: "78p666byb6l9xk",
        client_secret: "QfwJJt5ocq2fcqMZ",
      };
      axios
        .post(
          "https://www.linkedin.com/oauth/v2/accessToken",
          qs.stringify(requestBody)
        )
        .then((response) => {
          const accessToken = response.data.access_token;
          setAccessToken(accessToken);
          // Fetch the user's profile data using the access token
          axios
            .get("https://api.linkedin.com/v2/me", {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "cache-control": "no-cache",
                "X-Restli-Protocol-Version": "2.0.0",
              },
            })
            .then((response) => {
              console.log(response);
              const firstName = response.data.localizedFirstName;
              const lastName = response.data.localizedLastName;
              setUserProfile({ firstName, lastName });
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const login = () => {
    const authUrl = `https://www.linkedin.com/oauth/v2/authorization?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&state=${state}&scope=r_liteprofile`;
    window.location.href = authUrl;
  };

  return { login };
};
export default useLinkedInLogin;
