const db = require("../config/db");

// 1. READ ALL
const getAllStudents = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM students", (error, results) => {
            if (error) return reject(error);
            resolve(results);
        });
    });
};

// 2. READ BY ID
const getStudentById = (id) => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM students WHERE id = ?", [id], (error, results) => {
            if (error) return reject(error);
            resolve(results[0] || null);
        });
    });
};

// 3. CREATE
const createStudent = (data) => {
    const { name, email, age } = data;
    return new Promise((resolve, reject) => {
        db.query(
            "INSERT INTO students (name, email, age) VALUES (?, ?, ?)",
            [name, email, age],
            (error, results) => {
                if (error) return reject(error);
                resolve({ id: results.insertId, name, email, age });
            }
        );
    });
};

// 4. UPDATE
const updateStudent = (id, data) => {
    const { name, email, age } = data;
    return new Promise((resolve, reject) => {
        db.query(
            "UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?",
            [name, email, age, id],
            (error, results) => {
                if (error) return reject(error);
                if (results.affectedRows === 0) return resolve(null);
                resolve({ id, name, email, age });
            }
        );
    });
};

// 5. DELETE
const deleteStudent = (id) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM students WHERE id = ?", [id], (error, results) => {
            if (error) return reject(error);
            if (results.affectedRows === 0) return resolve(null);
            resolve(true);
        });
    });
};

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
};
