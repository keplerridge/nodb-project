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

    handleEdit = () => {

    }

    render(){
        // debugger;
        return(
            <div>
                {this.state.editView && this.props.gryffStudent.length > 0
                ? (
                    <div>
                        {this.props.gryffStudent}
                        <input 
                            value={this.state.nameInput}
                            onChange={e => this.handleInput(e.target.value)}/>
                        <button onClick={() => this.handleToggle()}>Submit</button>
                    </div>
                )
                : (
                    <div>
                        <p>{this.props.gryffStudent}</p>
                        <button onClick={this.handleToggle}>Edit Name</button>
                    </div>
                )}
                {/* <button onClick={() => this.props.releaseFn(this.props.pokemon.id)}>Release</button> */}
            </div>
        )
    }
}

export default GryffStudents;