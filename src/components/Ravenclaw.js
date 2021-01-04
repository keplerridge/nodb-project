import {Component} from 'react';
import RavenStudents from './RavenStudents';
import axios from 'axios';

class Ravenclaw extends Component {
    constructor() {
        super();
        this.state = {
            houseStudents: []
        }
    }

    componentDidMount () {
        this.getStudents();
    };

    getStudents = () => {
        axios.get('/api/students')
        .then(res => {
            this.setState({houseStudents: res.data})
        })
        .catch(err => console.log(err));
    };

    addStudent = () => {

    };

    editStudent = () => {

    };

    expelStudent = () => {
        
    };

    render(){
        const mappedStudents = this.state.houseStudents.map((student, i) => (
            <RavenStudents 
              key={i}
              ravenStudent={student}
              addRavenStudentFn={this.addStudent}
              editRavenStudentFn={this.editStudent}
              expelRavenStudentFn={this.expelStudent}
              />
        ))

        return(
            <div>
                <h2>Ravenclaw</h2>
                <RavenStudents />
                {mappedStudents}
            </div>
        )
    }
}

export default Ravenclaw;