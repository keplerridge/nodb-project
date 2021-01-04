const ravenStudents = [];
let id = 1;

module.exports = {
    getRavenStudents: (req, res) => {
        res.status(200).send(ravenStudents);
    },
    addRavenStudent: (req, res) => {

    },
    editRavenStudent: (req, res) => {
        const {id} = req.params;
    },
    expelRavenStudent: (req, res) => {
        const {id} = req.params;
    }
}