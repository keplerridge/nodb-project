import {Component} from 'react'
import SlyStudents from './SlyStudents'
import axios from 'axios';

class Slytherin extends Component {
    constructor() {
        super()
        this.state = {
            houseStudents: []
        }
    }

    componentDidMount () {
        this.getStudents();
    };

    getStudents = () => {
        axios.get('/api/sly-students')
        .then(res => {
            this.setState({houseStudents: res.slyStudents})
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
        // const mappedStudents = this.state.houseStudents.map((student, i) => (
        //     <SlyStudents 
        //       key={i}
        //       slyStudent={student}
        //       addSlyStudentFn={this.addStudent}
        //       editSlyStudentFn={this.editStudent}
        //       expelSlyStudentFn={this.expelStudent}
        //       />
        // ))

        return(
            <div>
                <h2>Slytherin</h2>
                <SlyStudents />
                {/* {mappedStudents} */}
            </div>
        )
    }
}

export default Slytherin;