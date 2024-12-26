import jwt from "jsonwebtoken";
import Config from "../../Config/config";
export function accessTokenGenerator(id: string) {
  return jwt.sign({ admin_id: id }, Config.secret.access, {
    expiresIn: "1hr",
  });
}
