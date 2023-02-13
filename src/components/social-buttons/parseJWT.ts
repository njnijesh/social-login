// This is a function which will parse the JWT token and return the payload.
// This function is used because google returns a JWT token and we need to parse
// it to get the user's email.
import { Buffer } from "buffer";

const parseJWT = (token: string) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var binaryData = Buffer.from(base64, "base64");
  var jsonPayload = JSON.parse(binaryData.toString("utf8"));

  return jsonPayload;
};

export default parseJWT;
