const React = require('react');
const ReactDom = require('react-dom');
require('babel-polyfill');

class Console extends React.Component{
    constructor(props){
        super(props);  
        this.state = {
            name:""
        };
        this.handleOnRegister = this.handleOnRegister.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleOnRegister(){
        this.props.onRegisterCallBack(this.state);
    }

    handleValueChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    render(){
        return(
            <div>
                <h3>参加登録</h3>
                <input type="text" name="name"
                    value={this.state.name}
                    onChange={this.handleValueChange}
                />
                <button onClick={this.handleOnRegister}>登録</button>
            </div>
        );
    }
}

module.exports = Console;