import {Component} from 'react';

class GryffStudents extends Component {
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
        this.props.editGryffStudentFn(id, this.state.nameInput);
        this.setState({nameInput: ''})
        this.handleToggle();
    }

    render(){
        return(
            <div>
                {this.state.editView
                ? (
                    <div>
                        <p>{this.props.gryffStudent.name}</p>
                        <input 
                            value={this.state.nameInput}
                            onChange={e => this.handleInput(e.target.value)}/>
                        <button onClick={() => this.handleEdit(this.props.gryffStudent.id)}>Submit</button>
                    </div>
                )
                : (
                    <div>
                        <p>{this.props.gryffStudent.name}</p>
                        <button onClick={this.handleToggle}>Edit Name</button>
                    </div>
                )} 
                <button onClick={() => this.props.expelGryffStudentFn(this.props.gryffStudent.id)}>Expel</button>
            </div>
        )
    }
}

export default GryffStudents;