const students = [];
let id = 1;

module.exports = {
    getStudents: (res, req) => {
        res.status(200).send(students);
    },
    addStudent: (req, res) => {

    },
    editStudent: (req, res) => {

    },
    expelStudent: (req, res) => {
        
    }
}