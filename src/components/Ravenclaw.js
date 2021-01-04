import {Component} from 'react';

class Ravenclaw extends Component {
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
              ravenStudent={student}
              addRavenStudentFn={this.addStudent}
              editRavenStudentFn={this.editStudent}
              expelRavenStudentFn={this.expelStudent}
              />
        ))

        return(
            <div>
                
            </div>
        )
    }
}

export default Ravenclaw;