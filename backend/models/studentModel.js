const db = require("../config/db");

const getAllStudents = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM students", (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = { getAllStudents };