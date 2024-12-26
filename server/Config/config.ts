import dotenv from "dotenv";
dotenv.config();

const ACCESS = process.env.ACCESS_TOKEN || "";
const REFRESH = process.env.REFRESH_TOKEN || "";
const PORT = process.env.PORT || "9000";
const HOST =
  process.env.ENVIRONMENT == "DEVELOPMENT"
    ? process.env.LOCAL_HOST
    : process.env.SERVER_HOST;
const DB_PORT =
  process.env.ENVIRONMENT === "DEVELOPMENT"
    ? process.env.LOCAL_DB_PORT
    : process.env.SERVER_DB_PORT;
const USERNAME =
  process.env.ENVIRONMENT === "DEVELOPMENT"
    ? process.env.LOCAL_USERNAME
    : process.env.SERVER_USERNAME;
const PASSWORD =
  process.env.ENVIRONMENT === "DEVELOPMENT"
    ? process.env.LOCAL_PASSWORD
    : process.env.SERVER_PASSWORD;
const DATABASE =
  process.env.ENVIRONMENT === "DEVELOPMENT"
    ? process.env.LOCAL_DATABASE
    : process.env.SERVER_DATABASE;

const Config = {
  server: {
    port: PORT,
  },
  database: {
    host: HOST,
    port: DB_PORT as unknown as number,
    username: USERNAME,
    password: PASSWORD,
    database: DATABASE,
  },
  secret: {
    access: ACCESS,
    refresh: REFRESH,
  },
};

export default Config;
