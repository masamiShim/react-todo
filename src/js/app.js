import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash'
import TodoCreator from "./components/TodoCreator";
import TodoList from './components/TodoList'
import Search from "./components/Search";

class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    id: this.createHashId(),
                    text: 'sample todo1',
                    done: false
                },
                {
                    id: this.createHashId(),
                    text: 'sample todo2',
                    done: false
                }
            ],
            searchText: ''
        };

        this.callBackRemoveTask = this.callBackRemoveTask.bind(this);
        this.callBackAddTask = this.callBackAddTask.bind(this);
        this.callBackToggleDone = this.callBackToggleDone.bind(this);
        this.callBackSearch = this.callBackSearch.bind(this);
        this.filterCollection = this.filterCollection.bind(this)
    }

    createHashId() {
        return Math.random().toString(36).slice(-16);
    }

    callBackToggleDone(id) {
        let updateData = this.state.data;
        for(let d of updateData){
            if (d.id === id) {
                d.done = !d.done;
                break;
            }
        }
        this.setState({
            data: updateData
        });
    }

    callBackRemoveTask(id) {
        let data = _.reject(this.state.data, {'id': id});
        this.setState({
            data: data
        });
    }

    callBackAddTask(val) {
        let nextData = this.state.data;
        nextData.push({id: this.createHashId(), text: val, done: false});
        this.setState({
            data: nextData
        });
    }

    callBackSearch(val) {
        console.log("App callBackSearch");
        this.setState({
            searchText: val
        });
    }

    filterCollection(elm) {
        const regexp = new RegExp('^' + this.state.searchText, 'i');
        return (elm.text.match(regexp));
    }
    render() {
        const data = (this.state.searchText) ? this.state.data.filter(this.filterCollection) : this.state.data;
        console.log("aaaa -> " + data)
        return (
            <div>
                <TodoCreator callBackAddTask={this.callBackAddTask}/>
                <Search callBackSearch={this.callBackSearch}/>
                <TodoList data={data} callBackRemoveTask={this.callBackRemoveTask} callBackToggleDone={this.callBackToggleDone}/>
            </div>
        );
    }
}

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
);