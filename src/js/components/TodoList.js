import React from 'react';
import Task from './Task';
import _ from 'lodash'

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.callBackToggleDone = this.callBackToggleDone.bind(this);
    }

    handleRemove(id) {
        let data = _.reject(this.state.data, {'id': id});
        this.setState({
            data: data
        });
        this.props.callBackRemoveTask(id);
    }

    callBackToggleDone(id) {
        this.props.callBackToggleDone(id);
    }

    render() {
        let tasks = [];
        console.log('TodoList Render ->' + this.props.data);
        for (let i in this.props.data) {
            tasks.push(<Task key={this.props.data[i].id}
                             id={this.props.data[i].id}
                             text={this.props.data[i].text} done={this.props.data[i].done} onRemove={this.handleRemove}
                             callBackToggleDone={this.callBackToggleDone}/>);
        }
        return (
            <ul className="list js-todo_list">
                {tasks}
            </ul>
        );
    }
}

