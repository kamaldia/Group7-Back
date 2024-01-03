import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

class Verification {
  static async verifyAdmin(req, res, next) {
    const token = req.headers["authorization"]; //got token from headers

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    let token_split = token.split(" ");
    // console.log("this is token in jwt1: " , token)
    // console.log("this is token split in jwt1: " , token_split[1])
    if (token_split[1]) { //took the second part since first is the bearer
      var decoded_token = jwt.decode(token_split[1]);
      var user_id = decoded_token.sub; // .sub is the unique id provided by google for their users, we already registered users to our db accordingly
      var user = await User.findByPk(user_id);
      if (user.role === "admin") {
        next();
      } else {
        return res.status(404).send("user is not an admin");
      }
    }
  }

  static async verifyLogin(req, res, next) {
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    let token_split = token.split(" ");
    // console.log("this is token split in jwt: ", token_split[1]);

    if (token_split[1]) {
      var decoded_token = jwt.decode(token_split[1]);
      var google_iss = decoded_token.iss; // .iss is the issuer of the token provided by google in the token object

      if ( google_iss === "https://accounts.google.com" || google_iss === "accounts.google.com" ) { // validate its googlle who issued the token
        next();
      } else {
        return res.status(400).send("token not issued by google");
      }
    }
  }
}

export default Verification;
