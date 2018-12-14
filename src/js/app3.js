import React from 'react';
import ReactDOM from 'react-dom';

class ToggleBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };

        // ハンドラの中でthisを使う場合は別のthisになってしまうので束縛が必要
        // 多分イベントがthisになってまう気がする
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button className='btn' onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <ToggleBtn/>,
    document.getElementById('app1')
);