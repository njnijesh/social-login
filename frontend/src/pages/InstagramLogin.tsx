import { useEffect } from "react";

const InstagramLogin = () => {
  const handleLogin = async () => {
    const res = await fetch("/auth/instagram");
    const { url } = await res.json();
    window.location.href = url;
  };
  useEffect(() => {
    handleLogin();
  }, []);
  return <div>Redirecting...</div>;
};
export default InstagramLogin;
