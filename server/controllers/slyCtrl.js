const slyStudents = [];
let id = 1;

module.exports = {
    getSlyStudents: (req, res) => {
        res.status(200).send(slyStudents);
    },
    addSlyStudent: (req, res) => {

    },
    editSlyStudent: (req, res) => {
        const {id} = req.params;
    },
    expelSlyStudent: (req, res) => {
        const {id} = req.params;
    }
}