import {Component} from 'react';
import CurrentStudents from './CurrentStudents';

class Gryffindor extends Component {
    constructor(){
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

    render() {
      const mappedStudents = this.state.houseStudents.map((student, i) => (
          <CurrentStudents 
            key={i}
            gryffStudent={student}
            addGryffStudentFn={this.addStudent}
            editGryffStudentFn={this.editStudent}
            expelGryffStudentFn={this.expelStudent}
            />
      ))
      return (
          <div>

          </div>
      )
    }
}

export default Gryffindor;