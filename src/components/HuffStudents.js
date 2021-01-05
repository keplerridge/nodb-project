import {Component} from 'react';

class HuffStudents extends Component {
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
        this.props.editHuffStudentFn(id, this.state.nameInput);
        this.setState({nameInput: ''})
        this.handleToggle();
    }

    render(){
        return(
            <div>
                {this.state.editView
                ? (
                    <div>
                        <p>{this.props.huffStudent.name}</p>
                        <input 
                            value={this.state.nameInput}
                            onChange={e => this.handleInput(e.target.value)}/>
                        <button onClick={() => this.handleEdit(this.props.huffStudent.id)}>Submit</button>
                    </div>
                )
                : (
                    <div>
                        <p>{this.props.huffStudent.name}</p>
                        <button onClick={this.handleToggle}>Edit Name</button>
                    </div>
                )} 
                <button onClick={() => this.props.expelHuffStudentFn(this.props.huffStudent.id)}>Expel</button>
            </div>
        )
    }
}

export default HuffStudents;