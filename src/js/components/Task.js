import React from 'react';
import ClassNames from 'classnames';

export default class Task extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            text: this.props.text,
            done: this.props.done,
            editable: false
        }

        this.handleClickToggleDone = this.handleClickToggleDone.bind(this);
        this.handleClickRemove = this.handleClickRemove.bind(this);
        this.handleShowEdit = this.handleShowEdit.bind(this);
        this.handleKeyUpCloseEdit = this.handleKeyUpCloseEdit.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
    }

    handleClickToggleDone() {
        this.setState(prevState => ({
            done: !prevState.done
        }));
        this.props.callBackToggleDone(this.id);
    }

    handleChangeText(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleClickRemove(e) {
        this.props.onRemove(this.state.id);
    }

    handleShowEdit() {
        this.setState({
            editable: true
        });
    }

    handleKeyUpCloseEdit(e) {
        console.log('handleKeyUpCloseEdit');
        if (e.keyCode === 13 && e.shiftKey === true) {
            this.setState({
                text: e.currentTarget.value,
                editable: false
            });
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('Task render')
        const classNameLi = ClassNames({
            'list__item': true,
            'list__item--done': this.state.done
        });

        const classNameIcon = ClassNames({
            'fa': true,
            'fa-circle-thin': !this.state.done,
            'fa-check-circle': this.state.done,
            'icon-check': true,

        });

        const input = (this.state.editable) ? <input type="text" className="editText" value={this.state.text}
                                                     onChange={this.handleChangeText}
                                                     onKeyUp={this.handleKeyUpCloseEdit}/>
            : <span onClick={this.handleShowEdit}>{this.state.text}</span>

        return (
            <li className={classNameLi}>
                <i className={classNameIcon} onClick={this.handleClickToggleDone} aria-hidden="true"/>
                {input}
                <i className="fa fa-trash icon-trash" onClick={this.handleClickRemove} aria-hidden="true"/>
            </li>
        );
    }
}