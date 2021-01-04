import {Component} from 'react'

class Slytherin extends Component {
    constructor() {
        super()
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
              slyStudent={student}
              addSlyStudentFn={this.addStudent}
              editSlyStudentFn={this.editStudent}
              expelSlyStudentFn={this.expelStudent}
              />
        ))

        return(
            <div>
                
            </div>
        )
    }
}

export default Slytherin;