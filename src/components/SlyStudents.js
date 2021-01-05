import {Component} from 'react';

class SlyStudents extends Component {
    constructor() {
        super();
        this.state = {
            nameInput: '',
            editView: false
        }
    }

    handleInput = (val) => {
        this.setState({nameInput: val})
    }

    handleToggle = () => {
        this.setState({editView: !this.state.editView})
    }

    handleEdit = (id) => {
        this.props.editSlyStudentFn(id, this.state.nameInput);
        this.setState({nameInput: ''})
        this.handleToggle();
    }

    render(){
        return(
            <div>
                {this.state.editView
                ? (
                    <div>
                        <p>{this.props.slyStudent.name}</p>
                        <input 
                            value={this.state.nameInput}
                            onChange={e => this.handleInput(e.target.value)}/>
                        <button onClick={() => this.handleEdit(this.props.slyStudent.id)}>Submit</button>
                    </div>
                )
                : (
                    <div>
                        <p>{this.props.slyStudent.name}</p>
                        <section>
                            <button onClick={this.handleToggle}>Edit Name</button>
                            <button onClick={() => this.props.expelSlyStudentFn(this.props.slyStudent.id)}>Expel</button>
                        </section>
                    </div>
                )} 
            </div>
        )
    }
}

export default SlyStudents;