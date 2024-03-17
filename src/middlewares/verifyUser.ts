import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

import 'dotenv/config';

export default (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({ message: "Authentication token wasn't found", code: 1 });
  }

  const scheme = authorization.slice(0,6);

  if (!String(scheme).startsWith("Bearer")) {
    return res.status(401).json({ message: "Authentication error" });
  }

  const token = authorization.slice(7, authorization.length);

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ message: "Invalid token" });
  }

  jwt.verify(token, `${process.env.SECRET}`, async (err, data) => {
    if (err) {
      return res.status(401).send({ message: "Access denied, sign in again" });
    }
   
    if((data as any)?.exp < (Date.now() / 1000)) {
      return res.status(401).json({ message: "Session expired, please sign in again" });
    }

    return next();
  });
};