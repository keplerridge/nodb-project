const slyStudents = [];
let id = 1;

module.exports = {
    getSlyStudents: (req, res) => {
        res.status(200).send(slyStudents);
    },
    addSlyStudent: (req, res) => {
        const {student} = req.body;

        const newStudent = {name: student, id: id};
        id++;

        slyStudents.push(newStudent);
        res.status(200).send(slyStudents);
    },
    editSlyStudent: (req, res) => {
        const {id} = req.params,
              {name} = req.body;

        let studentIndex = slyStudents.findIndex(el => el.id === +id);
        slyStudents[studentIndex]['name'] = name;
        
        res.status(200).send(slyStudents);
    },
    expelSlyStudent: (req, res) => {
        const {id} = req.params;
        
        const index = slyStudents.findIndex(el => el.id === +id);
        
        slyStudents.splice(index, 1);
        res.status(200).send(slyStudents);
    }
}