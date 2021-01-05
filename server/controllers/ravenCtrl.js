const ravenStudents = [];
let id = 1;

module.exports = {
    getRavenStudents: (req, res) => {
        res.status(200).send(ravenStudents);
    },
    addRavenStudent: (req, res) => {
        const {student} = req.body;

        const newStudent = {name: student, id: id};
        id++;

        ravenStudents.push(newStudent);
        res.status(200).send(ravenStudents);
    },
    editRavenStudent: (req, res) => {
        const {id} = req.params,
              {name} = req.body;

        let studentIndex = ravenStudents.findIndex(el => el.id === +id);
        ravenStudents[studentIndex]['name'] = name;
        
        res.status(200).send(ravenStudents);
    },
    expelRavenStudent: (req, res) => {
        const {id} = req.params;
        
        const index = ravenStudents.findIndex(el => el.id === +id);
        
        ravenStudents.splice(index, 1);
        res.status(200).send(ravenStudents);
    }
}