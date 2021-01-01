const students = [];
let id = 0;

module.exports = {
    getStudents: (req, res) => {
        res.status(200).send(students);
    },
    addStudent: (req, res) => {
        
    }
}