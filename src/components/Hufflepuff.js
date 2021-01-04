import {Component} from 'react';

class Hufflepuff extends Component {
    constructor() {
        super();
        this.state = {
            houseStudents: []
        }
    }

    componentDidMount () {

    };

    addStudent = () => {

    };

    editStudent = () => {

    };

    expelStudent = () => {
        
    };

    render(){
        const mappedStudents = this.state.houseStudents.map((student, i) => (
            <CurrentStudents 
              key={i}
              huffStudent={student}
              addHuffStudentFn={this.addStudent}
              editHuffStudentFn={this.editStudent}
              expelHuffStudentFn={this.expelStudent}
              />
        ))

        return(
            <div>

            </div>
        )
    }
}

export default Hufflepuff;