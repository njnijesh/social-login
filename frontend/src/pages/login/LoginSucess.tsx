import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
const LoginSuccess = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <div>
      <h3>Login Success. Redirecting...</h3>
    </div>
  );
};
export default LoginSuccess;
