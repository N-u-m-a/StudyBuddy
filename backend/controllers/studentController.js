const Student = require("../models/studentModel");

// 1. READ ALL (Get all students)
const getStudents = async (req, res) => {
    try {
        const students = await Student.getAllStudents();
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 2. READ BY ID (Get single student)
const getStudentById = async (req, res) => {
    try {
        const student = await Student.getStudentById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 3. CREATE (Add new student)
const createStudent = async (req, res) => {
    try {
        const newStudent = await Student.createStudent(req.body);
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// 4. UPDATE (Edit record)
const updateStudent = async (req, res) => {
    try {
        const updatedStudent = await Student.updateStudent(req.params.id, req.body);
        if (!updatedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(updatedStudent);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// 5. DELETE (Remove record)
const deleteStudent = async (req, res) => {
    try {
        const deletedStudent = await Student.deleteStudent(req.params.id);
        if (!deletedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json({ message: "Student deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
};
