import {Component} from 'react'
import SlyStudents from './SlyStudents'
import axios from 'axios';

class Slytherin extends Component {
    constructor() {
        super()
        this.state = {
            houseStudents: [],
            nameInput: ''
        }
    }

    componentDidMount () {
        this.getStudents();
    };

    getStudents = () => {
        axios.get('/api/sly-students')
        .then(res => {
            this.setState({houseStudents: res.data})
        })
        .catch(err => console.log(err));
    };

    addStudent = (student) => {
        axios.post('/api/sly-students', {student: student})
        .then(res => {
            this.setState({houseStudents: res.data})
        })
        .catch(err => console.log(err));
        this.getStudents();
    };

    editStudent = (id, newName) => {
        let body = {name: newName}

        axios.put(`/api/sly-students/${id}`, body)
        .then(res => {
            this.setState({houseStudents: res.data})
        })
        .catch(err => console.log(err));
    };

    expelStudent = (id) => {
        axios.delete(`/api/sly-students/${id}`)
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
          <SlyStudents 
            key={i}
            slyStudent={student}
            editSlyStudentFn={this.editStudent}
            expelSlyStudentFn={this.expelStudent}
            />
      )

      return (
          <div>
            <h2>Slytherin</h2>
            <button onClick={() => this.handleAdd(this.state.nameInput)}>Add Student</button>
            <input 
              value = {this.state.nameInput}
              onChange={e => this.handleInput(e.target.value)}/>
            {mappedStudents}
          </div>
        )
    }
}

export default Slytherin;