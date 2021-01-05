const huffStudents = [];
let id = 1;

module.exports = {
    getHuffStudents: (req, res) => {
        res.status(200).send(huffStudents);
    },
    addHuffStudent: (req, res) => {
        const {student} = req.body;

        const newStudent = {name: student, id: id};
        id++;

        huffStudents.push(newStudent);
        res.status(200).send(huffStudents);
    },
    editHuffStudent: (req, res) => {
        const {id} = req.params,
              {name} = req.body;

        let studentIndex = huffStudents.findIndex(el => el.id === +id);
        huffStudents[studentIndex]['name'] = name;
        
        res.status(200).send(huffStudents);
    },
    expelHuffStudent: (req, res) => {
        const {id} = req.params;
        
        const index = huffStudents.findIndex(el => el.id === +id);
        
        huffStudents.splice(index, 1);
        res.status(200).send(huffStudents);
    }
}