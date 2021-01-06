import axios from 'axios';
import {Component} from 'react';
import GryffStudents from './GryffStudents';

class Gryffindor extends Component {
    constructor(){
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
        axios.get('/api/gryff-students')
        .then(res => {
            this.setState({houseStudents: res.data})
        })
        .catch(err => console.log(err));
    };

    addStudent = (student) => {
        axios.post('/api/gryff-students', {student: student})
        .then(res => {
            this.setState({houseStudents: res.data})
        })
        .catch(err => console.log(err));
        this.getStudents();
    };

    editStudent = (id, newName) => {
        let body = {name: newName}

        axios.put(`/api/gryff-students/${id}`, body)
        .then(res => {
            this.setState({houseStudents: res.data})
        })
        .catch(err => console.log(err));
    };

    expelStudent = (id) => {
        axios.delete(`/api/gryff-students/${id}`)
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
          <GryffStudents 
            key={i}
            gryffStudent={student}
            editGryffStudentFn={this.editStudent}
            expelGryffStudentFn={this.expelStudent}
            />
      )

      return (
          <div id='gryffindor'>
            <h2 id='gryff-title'>Gryffindor</h2>
            <button onClick={() => this.handleAdd(this.state.nameInput)}>Add Student</button>
            <input id='gryff-add'
              value = {this.state.nameInput}
              onChange={e => this.handleInput(e.target.value)}/>
            <p id='gryff-students'>{mappedStudents}</p>
          </div>
        )
    }
}

export default Gryffindor;