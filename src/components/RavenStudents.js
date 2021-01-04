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

    render(){
        return(
            <div>
                {this.state.editView
                ? (
                    <div>
                        <input 
                            value={this.state.nameInput}
                            onChange={e => this.handleInput(e.target.value)}/>
                        {/* <button onClick={() => this.handleEdit(this.props.pokemon.id)}>Submit</button> */}
                    </div>
                )
                : (
                    <div>
                        {/* <p>{this.props.pokemon.name}</p> */}
                        <button onClick={this.handleToggle}>Edit Name</button>
                    </div>
                )}
                {/* <button onClick={() => this.props.releaseFn(this.props.pokemon.id)}>Release</button> */}
            </div>
        )
    }
}

export default RavenStudents;