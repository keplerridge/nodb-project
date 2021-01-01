import {Component} from 'react';
import CurrentStudents from './CurrentStudents';

class Gryffindor extends Component {
    constructor(){
        super();
        this.state = {
            houseStudents: [],
            studentName: '',
            studentId: 0
        }
    }

    render() {
      console.log(this.state.houseStudents);
      const mappedStudents = this.state.houseStudents.map((student, i) => (
          <CurrentStudents 
            key={i}
            student={student}
            />
      ))
    }
}

export default Gryffindor;