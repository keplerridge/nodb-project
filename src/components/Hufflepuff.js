import {Component} from 'react';
import HuffStudents from './HuffStudents';
import axios from 'axios';

class Hufflepuff extends Component {
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
            <HuffStudents 
              key={i}
              huffStudent={student}
              addHuffStudentFn={this.addStudent}
              editHuffStudentFn={this.editStudent}
              expelHuffStudentFn={this.expelStudent}
              />
        ))

        return(
            <div>
                <h2>Hufflepuff</h2>
                <HuffStudents />
                {mappedStudents}
            </div>
        )
    }
}

export default Hufflepuff;