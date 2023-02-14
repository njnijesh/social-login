// This hook is used to login to instagram and get the user data. Because we do not have a backend
// and ssl certificate, we are using localhost as the redirect uri. This is not recommended for production. In production, you should use a backend to handle the redirect uri and get the access token.

const useInstagramLogin = () => {
  const login = () => {
    const redirectUri = encodeURIComponent("http://localhost:3000/");

    const twitchLoginUrl = `https://api.instagram.com/oauth/authorize
  ?client_id=701579268297786
  &redirect_uri=${redirectUri}
  &scope=user_profile,
  &response_type=code`;
    window.location.href = twitchLoginUrl;
  };
  return { login };
};
export default useInstagramLogin;
