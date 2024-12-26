import { Database } from "../../Utils/Database/Database";
import { Response } from "express";
class Sql {
  async start() {
    const response = await new Promise((resolve, reject) => {
      Database.getConnection((err, conn) => {
        if (err) {
          console.error(err);
          reject(err);
        }
        resolve(conn);
        console.info("Database connection successful");
      });
    });
    return response;
  }

  async runQuery(sql: string, parameterizedSQl: any[]) {
    let tempSQL = sql.split("?").length - 1;
    if (parameterizedSQl.length !== tempSQL) return false;
    let response = await new Promise((resolve, reject) => {
      Database.getConnection((err, conn) => {
        if (err) reject(err);
        conn.query(sql, parameterizedSQl, (err, result) => {
          conn.release();
          if (err) reject(err);
          resolve(result);
        });
      });
    });
    return response;
  }

  async message(res: Response, status: number, message: string, data: string) {
    res.setHeader("Content-Type", "application/json");

    if (data) res.status(status).json({ status, message, data });
    else res.status(status).json({ status, message });
  }
}
export default new Sql();
