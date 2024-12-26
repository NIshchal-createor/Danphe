import { createPool } from "mysql2";
import Config from "../../Config/config";

export const Database = createPool({
  connectionLimit: 20,
  host: Config.database.host,
  port: Config.database.port,
  user: Config.database.username,
  password: Config.database.password,
  database: Config.database.database,
  multipleStatements: true,
});
