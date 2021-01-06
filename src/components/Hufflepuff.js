import {Component} from 'react';
import HuffStudents from './HuffStudents';
import axios from 'axios';

class Hufflepuff extends Component {
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
        axios.get('/api/huff-students')
        .then(res => {
            this.setState({houseStudents: res.data})
        })
        .catch(err => console.log(err));
    };

    addStudent = (student) => {
        axios.post('/api/huff-students', {student: student})
        .then(res => {
            this.setState({houseStudents: res.data})
        })
        .catch(err => console.log(err));
        this.getStudents();
    };

    editStudent = (id, newName) => {
        let body = {name: newName}

        axios.put(`/api/huff-students/${id}`, body)
        .then(res => {
            this.setState({houseStudents: res.data})
        })
        .catch(err => console.log(err));
    };

    expelStudent = (id) => {
        axios.delete(`/api/huff-students/${id}`)
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
          <HuffStudents 
            key={i}
            huffStudent={student}
            editHuffStudentFn={this.editStudent}
            expelHuffStudentFn={this.expelStudent}
            />
      )

      return (
          <div id='hufflepuff'>
            <h2 id='huff-title'>Hufflepuff</h2>
            <button onClick={() => this.handleAdd(this.state.nameInput)}>Add Student</button>
            <input id='huff-add'
              value = {this.state.nameInput}
              onChange={e => this.handleInput(e.target.value)}/>
            <p id='huff-students'>{mappedStudents}</p>
          </div>
        )
    }
}

export default Hufflepuff;