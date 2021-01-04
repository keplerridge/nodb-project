const slyStudents = [],
let id = 1;

module.exports = {
    getSlyStudents: (res, req) => {
        res.status(200).send(gryffStudents);
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