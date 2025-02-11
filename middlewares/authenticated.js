import { jwt } from "../utils/index.js";

function asureAuth(req, res, next) {
  console.log("middleware ejecutado");
  next();
}

export const mdAuth = { asureAuth };
