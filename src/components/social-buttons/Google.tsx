//Google doesn't allow us to use our own button, so we have to use their button.
import { useRef, useEffect, useContext } from "react";

import parseJWT from "./parseJWT";
import * as types from "./types";
import { UserContext } from "../../context/user/UserContextProvider";

const GoogleButton = () => {
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";
  if (!clientId) throw new Error("Google client id not set.");

  const { setUser } = useContext(UserContext);
  const buttonRef = useRef(null);

  // Checks if the buttonRef is set and then initialize google login and renders the google
  // sign in button.
  useEffect(() => {
    // Callback function to parse the response from google sign in.
    const parseUser = (response: types.Response) => {
      const parsedUser = parseJWT(response.credential);
      setUser({
        id: parsedUser.sub,
        name: parsedUser.given_name + parsedUser.family_name,
        email: parsedUser.email,
        loggedInBy: "google",
      });
    };

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      if (buttonRef.current) {
        window.google.accounts.id.initialize({
          client_id: clientId,
          callback: parseUser,
        });
        window.google.accounts.id.renderButton(buttonRef.current, {
          theme: "filled_blue",
          type: "standard",
          text: "signin_with",
          shape: "rectangular",
          logo_alignment: "left",
          width: "200",
        });
      }
    };
  }, [clientId, setUser]);

  // Returns the div element in which google will render the sign in button.
  return <div ref={buttonRef}></div>;
};
export default GoogleButton;
