const Student = require("../models/studentModel");

const getStudents = async (req, res) => {
    try {
        const students = await Student.getAllStudents();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getStudents };