const React = require('react');
const ReactDom = require('react-dom');
require('babel-polyfill');

class List extends React.Component{
    constructor(props){
        super(props);

        this.linerender = this.linerender.bind(this);
    }

    linerender(){
        return(
            this.props.list.map(record => {return(
                <tr key={record.id}>
                    <td>{record.id}</td>
                    <td>{record.name}</td>
                </tr>
            )})
        );
    }

    render(){
        return(
            <table>
            <caption>大会参加者一覧</caption>
            <thead>
                <tr>
                    <th>管理番号</th>
                    <th>氏名</th>
                </tr>
            </thead>
            <tbody>
                {this.linerender()}
            </tbody>
            </table>
        );
    }
}

module.exports = List;