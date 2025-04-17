import { isV4Format, isV6Format } from "ip";

const LOCALHOST_IPS = ["127.0.0.1", "::1", "::ffff:127.0.0.1"];

export type IpValidationResult = {
  isValid: boolean;
  reason?: string;
};

export const validateIp = (ip: string | undefined): IpValidationResult => {
  if (!ip) return { isValid: false, reason: "IP is empty" };

  if (LOCALHOST_IPS.includes(ip)) {
    return { isValid: false, reason: "Localhost IP not allowed" };
  }

  if (!isV4Format(ip) && !isV6Format(ip)) {
    return { isValid: false, reason: "Invalid IP format" };
  }

  return { isValid: true };
};
