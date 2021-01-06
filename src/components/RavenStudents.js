import {Component} from 'react';

class RavenStudents extends Component {
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
        this.props.editRavenStudentFn(id, this.state.nameInput);
        this.setState({nameInput: ''})
        this.handleToggle();
    }

    render(){
        return(
            <div>
                {this.state.editView
                ? (
                    <div>
                        <p>{this.props.ravenStudent.name}</p>
                        <input id='raven-edit'
                            value={this.state.nameInput}
                            onChange={e => this.handleInput(e.target.value)}/>
                        <button onClick={() => this.handleEdit(this.props.ravenStudent.id)}>Submit</button>
                    </div>
                )
                : (
                    <div>
                        <p>{this.props.ravenStudent.name}</p>
                        <section>
                            <button onClick={this.handleToggle}>Edit Name</button>
                            <button onClick={() => this.props.expelRavenStudentFn(this.props.ravenStudent.id)}>Expel</button>
                        </section>
                    </div>
                )} 
            </div>
        )
    }
}

export default RavenStudents;