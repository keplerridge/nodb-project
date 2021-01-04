const gryffStudents = [];
let id = 1;

module.exports = {
    getGryffStudents: (req, res) => {
        res.status(200).send(gryffStudents);
    },
    addGryffStudent: (req, res) => {
        const {student} = req.body
        
        gryffStudents.push(student);
    },
    editGryffStudent: (req, res) => {
        const {id} = req.params;
    },
    expelGryffStudent: (req, res) => {
        const {id} = req.params;
    }
}