import { tryCatch } from "./error.js";

const isAuthenticated = tryCatch(async (req, _res, next) => {
  console.log(req.cookies);
});

export { isAuthenticated };
