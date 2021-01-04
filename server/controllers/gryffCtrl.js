const gryffStudents = [],
let id = 1;

module.exports = {
    getGryffStudents: (res, req) => {
        res.status(200).send(gryffStudents);
    },
    addGryffStudent: (req, res) => {

    },
    editGryffStudent: (req, res) => {
        const {id} = req.params;
    },
    expelGryffStudent: (req, res) => {
        const {id} = req.params;
    }
}