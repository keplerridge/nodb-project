const huffStudents = [];
let id = 1;

module.exports = {
    getHuffStudents: (req, res) => {
        res.status(200).send(huffStudents);
    },
    addHuffStudent: (req, res) => {

    },
    editHuffStudent: (req, res) => {
        const {id} = req.params;
    },
    expelHuffStudent: (req, res) => {
        const {id} = req.params;
    }
}