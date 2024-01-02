import jwt from "jsonwebtoken";

class Verification {

  static async verifyAdmin(req, res, next) { // delete the uncommented and fix the others when we want to authenticate admin
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    let token_split = token.split(" ");
    // console.log("this is token in jwt1: " , token)
    // console.log("this is token split in jwt1: " , token_split[1])
    if (token_split[1] === 'true') { // change later if we decided on real token
      next();
    }
    // const admin_token = req.headers["authorization"];

    // if (!admin_token) {
    //   return res.status(401).json({ message: "No token provided" });
    // }

    // let admin_token_split = admin_token.split(" ");

    // jwt.verify(
    //   admin_token_split[1],
    //   process.env.ACCESS_TOKEN_SECRET,
    //   (err, decoded) => {
    //     if (err) {
    //       console.log(err);
    //       return res
    //         .status(403)
    //         .json({ message: "Failed to authenticate admin token" });
    //     } else if (!decoded.isAdmin) {
    //       return res
    //         .status(403)
    //         .json({ message: "Forbidden: Insufficient permissions" });
    //     }
    //     req.id = decoded.id;
    //     next();
    //   }
    // );
  }

  static async verifyLogin(req, res, next) {
    const token = req.headers["authorization"];

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    let token_split = token.split(" ");
    console.log("this is token split in jwt: " , token_split[1])
    if (token_split[1] === 'true') { // change later if we decided on real token
      next();
    }
    // jwt.verify(
    //   token_split[1],
    //   process.env.ACCESS_TOKEN_SECRET,
    //   (err, decoded) => {
    //     if (err) {
    //       console.log(err);
    //       return res
    //         .status(403)
    //         .json({ message: "Failed to authenticate admin token" });
    //     }
    //     req.id = decoded.id;
    //     next();
    //   }
    // );
  }
}

export default Verification;
