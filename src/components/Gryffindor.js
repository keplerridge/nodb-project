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
            this.setState({houseStudents: res.data})
        })
        .catch(err => console.log(err));
    };

    addStudent = () => {
        
        this.getStudents();
    };

    editStudent = (id, newName) => {
        
    };

    expelStudent = () => {
        
    };

    render() {
      const mappedStudents = this.state.houseStudents.map((student, i) => 
          <GryffStudents 
            key={i}
            gryffStudent={student}
            addGryffStudentFn={this.addStudent}
            editGryffStudentFn={this.editStudent}
            expelGryffStudentFn={this.expelStudent}
            />
      )
    console.log(this.state.houseStudents);

      return (
          <div>
              <h2>Gryffindor</h2>

              {mappedStudents}
          </div>
        )
    }
}

export default Gryffindor;