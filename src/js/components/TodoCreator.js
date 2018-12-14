import React from 'react';
import ReactDOM from 'react-dom';

export default class TodoCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: '',
            errMsg: '',
            hasError: false
        };

        this.handelChange = this.handelKeyUp.bind(this);
        this.handelKeyUp = this.handelKeyUp.bind(this);
    }

    hadleChange(e) {
        this.setState({
            val: e.target.value
        })
    }

    handleKeyUp(e) {
        if (e.keyCode === 13 && e.shiftKey === true) {
            const val = e.target.value;
            if (!val) {
                this.setState({
                    errMsg: '入力が空です',
                    hasError: true
                });
                return;
            }

            this.setState({
                val: '',
                errMsg: '',
                hasError: false
            });

            this.props.callBackAddTask(val);
        }
    }

    render() {
        const errMsg = (this.state.hasError) ? <span className="error">{this.state.errMsg}</span> : '';

        return (
            <div className="form">
                <div className="inputArea">
                    <input type="text" className="inputText" value={this.state.val}
                           onChange={this.handelChange} onKeyUp={this.handelKeyUp} placeholder="something todo input"/>
                    {errMsg}
                </div>
            </div>
        );
    }
}

