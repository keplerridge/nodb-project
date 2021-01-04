import axios from 'axios';
import {Component} from 'react';
import GryffStudents from './GryffStudents';

class Gryffindor extends Component {
    constructor(){
        super();
        this.state = {
            houseStudents: []
        }
    }

    componentDidMount () {
        this.getStudents();
    };

    getStudents = () => {
        axios.get('/api/gryff-students')
        .then(res => {
            this.setState({houseStudents: res})
            console.log(this.state.houseStudents);
        })
        .catch(err => console.log(err));
    };

    addStudent = () => {
        
    };

    editStudent = (id, newName) => {
        
    };

    expelStudent = () => {
        
    };

    render() {
      const mappedStudents = this.state.houseStudents.map((student, i) => (
          <GryffStudents 
            key={i}
            gryffStudent={student}
            addGryffStudentFn={this.addStudent}
            editGryffStudentFn={this.editStudent}
            expelGryffStudentFn={this.expelStudent}
            />
      ))
      return (
          <div>
              <h2>Gryffindor</h2>
              <GryffStudents />
              {mappedStudents}
          </div>
        )
    }
}

export default Gryffindor;