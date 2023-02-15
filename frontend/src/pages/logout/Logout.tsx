import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("user");
    navigate("/");
  });
  return (
    <>
      <h3>We will miss you.</h3>
      <p>Redirecting to home</p>
    </>
  );
};
export default Logout;
