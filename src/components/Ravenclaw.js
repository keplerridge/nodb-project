import {Component} from 'react';
import RavenStudents from './RavenStudents';
import axios from 'axios';

class Ravenclaw extends Component {
    constructor() {
        super();
        this.state = {
            houseStudents: [],
            nameInput: ''
        }
    }

    componentDidMount () {
        this.getStudents();
    };

    getStudents = () => {
        axios.get('/api/raven-students')
        .then(res => {
            this.setState({houseStudents: res.data})
        })
        .catch(err => console.log(err));
    };

    addStudent = (student) => {
        axios.post('/api/raven-students', {student: student})
        .then(res => {
            this.setState({houseStudents: res.data})
        })
        .catch(err => console.log(err));
        this.getStudents();
    };

    editStudent = (id, newName) => {
        let body = {name: newName}

        axios.put(`/api/raven-students/${id}`, body)
        .then(res => {
            this.setState({houseStudents: res.data})
        })
        .catch(err => console.log(err));
    };

    expelStudent = (id) => {
        axios.delete(`/api/raven-students/${id}`)
        .then(res => {
            this.setState({houseStudents: res.data})
        })
        .catch(err => console.log(err));
    };

    handleInput = (val) => {
        this.setState({nameInput: val})
    }

    handleAdd = (student) => {
        this.addStudent(student);
        this.setState({nameInput: ''})
    }

    render() {
      const mappedStudents = this.state.houseStudents.map((student, i) => 
          <RavenStudents 
            key={i}
            ravenStudent={student}
            editRavenStudentFn={this.editStudent}
            expelRavenStudentFn={this.expelStudent}
            />
      )

      return (
          <div id='ravenclaw'>
            <h2 id='raven-title'>Ravenclaw</h2>
            <button onClick={() => this.handleAdd(this.state.nameInput)}>Add Student</button>
            <input id='raven-add'
              value = {this.state.nameInput}
              onChange={e => this.handleInput(e.target.value)}/>
            <p id='raven-students'>{mappedStudents}</p>
          </div>
        )
    }
}

export default Ravenclaw;