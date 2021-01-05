const gryffStudents = [];
let id = 1;

module.exports = {
    getGryffStudents: (req, res) => {
        res.status(200).send(gryffStudents);
    },
    addGryffStudent: (req, res) => {
        const {student} = req.body;

        const newStudent = {name: student, id: id};
        id++;

        gryffStudents.push(newStudent);
        res.status(200).send(gryffStudents);
    },
    editGryffStudent: (req, res) => {
        const {id} = req.params,
              {name} = req.body;

        let studentIndex = gryffStudents.findIndex(el => el.id === +id);
        gryffStudents[studentIndex]['name'] = name;
        
        res.status(200).send(gryffStudents);
    },
    expelGryffStudent: (req, res) => {
        const {id} = req.params;
        
        const index = gryffStudents.findIndex(el => el.id === +id);
        
        gryffStudents.splice(index, 1);
        res.status(200).send(gryffStudents);
    }
}