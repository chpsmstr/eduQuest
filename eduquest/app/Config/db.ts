import mysql from "mysql2";

export default mysql.createConnection({
    host: "localhost",
    user: "testuser",
    password: "pw",
    database: "eduquest"
});