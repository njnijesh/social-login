import useLinkedInLogin from "../../hooks/useLinkedInLogin";
import Button from "../button";
import Icon from "../../icons/LinkedInSvg";

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
