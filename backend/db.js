const mysql = require("mysql2");

const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "studyuser",
    password: process.env.DB_PASSWORD || "study123",
    database: process.env.DB_NAME || "studybuddy",
    port: process.env.DB_PORT || 3306
});

db.connect((err) => {
    if (err) {
        console.error("MySQL connection failed:", err);
        return;
    }

    console.log("MySQL connected successfully!");
});

module.exports = db;