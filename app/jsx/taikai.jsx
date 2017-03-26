const React = require('react');
const ReactDom = require('react-dom');
require('babel-polyfill');

const List = require('./list.jsx');
const Console = require('./Console.jsx');

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props;
        this.onRegister = this.onRegister.bind(this);
    }

    onRegister(data){
        console.log(data);
        let list = this.state.list;
        list.push({
            id:'n'+list.length,
            name:data.name
        });

        this.setState({list:list});
    }

    render(){
        return(
        <div>
            <List list={this.state.list}/>
            <Console onRegisterCallBack={this.onRegister} />
        </div>
        );
    }
}

App.defaultProps = {list:[
    {id:'1A',name:'aaa'},
    {id:'2B',name:'bbb'},
    {id:'3C',name:'ccc'}
]};

module.exports = App;