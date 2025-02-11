import { jwt } from "../utils/index.js";

function asureAuth(req, res, next) {
  console.log("#########");
  console.log("#########");
  console.log("DATOS DE LOS HEADERS");
  console.log(req.headers);
  console.log("#########");
  console.log("#########");

  if (!req.headers.authorization) {
    return res.status(403).send({ msg: "La petición no tiene la cabecera de autenticación" });
  }

  const token = req.headers.authorization.replace("Bearer ", "");

  try {
    const hasExpired = jwt.hasExpiredToken(token);

    if (hasExpired) {
      return res.status(400).send({ msg: "El token ha expirado" });
    }

    const payload = jwt.decoded(token);
    req.user = payload;

    next();
  } catch (error) {
    return res.status(400).send({ msg: "Token inválido" });
  }
}

export const mdAuth = { asureAuth };
