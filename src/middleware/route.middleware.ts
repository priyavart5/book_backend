// middleware.ts
import { Request, Response, NextFunction } from "express";
import { Logger, validateIp } from "../utils";

export const routeMiddleware = ( req: Request, _res: Response, next: NextFunction ) => {
  if (req.path !== "/health") {
    const ip = req.clientIp ?? undefined;
    const ipValidation = validateIp(ip);

    const clientInfo = {
      ip,
      isValid: ipValidation.isValid,
      reason: ipValidation.reason || null,
      userAgent: req.headers["user-agent"],
    };

    Logger.group({
      title: "New Request",
      descriptions: [
        { description: "URL", info: `${req.method} ${req.originalUrl}` },
        { description: "PARAMS", info: JSON.stringify(req.params) },
        { description: "QUERY", info: JSON.stringify(req.query) },
        { description: "BODY", info: JSON.stringify(req.body) },
        { description: "CLIENT INFO", info: JSON.stringify(clientInfo) },
      ],
    });
  }

  next();
};
