// const express = require("express");
// const router = express.Router();
// const {
//   createStudent,
//   getAllStudents,
//   getStudentById,
//   updateStudent,
//   deleteStudent,
// } = require("../controllers/studentController"); // ensure controller path matches

// // CREATE
// router.post("/", createStudent);

// // READ ALL
// router.get("/", getAllStudents);

// // READ BY ID
// router.get("/:id", getStudentById);

// // UPDATE
// router.put("/:id", updateStudent);

// // DELETE
// router.delete("/:id", deleteStudent);

// module.exports = router;
const express = require("express");
const router = express.Router();
const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController"); // ensure controller path matches

// CREATE
router.post("/", createStudent);

// READ ALL
router.get("/", getAllStudents);

// READ BY ID
router.get("/:id", getStudentById);

// UPDATE
router.put("/:id", updateStudent);

// DELETE
router.delete("/:id", deleteStudent);

module.exports = router;
