import { useEffect } from "react";

import Button from "../button";
import Icon from "../../icons/FacebookSvg";
import useFacebookLogin from "../../hooks/useFacebookLogin";

const FacebookIcon = () => {
  const appId: string = process.env.REACT_APP_FACEBOOK_APP_ID || "";
  // Custom hook which handles the login and logout with facebook button.
  const { login: loginWithFacebook } = useFacebookLogin();

  // This useEffect is used to initialize the facebook sdk.
  // You can find more information about it here: https://developers.facebook.com/docs/javascript/quickstart
  useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        appId,
        autoLogAppEvents: true,
        xfbml: true,
        version: "v9.0",
      });
    };

    (function (d, s, id) {
      var js: any,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode?.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, [appId]);

  return (
    <Button
      label="Continue with Facebook"
      icon={<Icon />}
      onClick={() => loginWithFacebook()}
      classNames="facebook"
    />
  );
};
export default FacebookIcon;
