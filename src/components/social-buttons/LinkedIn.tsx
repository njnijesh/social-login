// This component is used to login with LinkedIn. We get the access token from the LinkedInAPI if
// we can allow CORS in the browser but we are facing the error when we try to allow CORS in the
// browser but we may or may not get the user details.
import Button from "../button";
import Icon from "../../icons/LinkedInSvg";
import useLinkedInLogin from "../../hooks/useLinkedInLogin";

const LinkedInIcon = () => {
  const { login } = useLinkedInLogin();
  return (
    <Button
      label="Continue with LinkedIn"
      onClick={login}
      classNames="linkedin"
      icon={<Icon />}
    />
  );
};
export default LinkedInIcon;
