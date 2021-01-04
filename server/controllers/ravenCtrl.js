const ravenStudents = [],
let id = 1;

module.exports = {
    getRavenStudents: (res, req) => {
        res.status(200).send(gryffStudents);
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