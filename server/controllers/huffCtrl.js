const huffStudents = [],
let id = 1;

module.exports = {
    getHuffStudents: (res, req) => {
        res.status(200).send(gryffStudents);
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