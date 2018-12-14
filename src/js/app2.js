import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <h1>Hello, World!</h1>,
    document.getElementById('app1')
);

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

var user = {
    firstName: "shimbuichi",
    lastName: "masami"
};

var element = (
    <h1>
        Hello, {formatName(user)} !
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('app2')
);


class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
};
const element2 = <Welcome name="Masa"/>;
ReactDOM.render(
    element2,
    document.getElementById('app3')
);


function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()}/>,
        document.getElementById('app4')
    );
}

setInterval(tick, 1000);

class Clock2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h1>Hello, world2!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock2/>,
    document.getElementById('app5')
);

class Clock3 extends React.Component {
    constructor(props) {
        console.log('constructor')
        super(props);
        this.state = {
            date: new Date()
        };
    }

    // renderメソッドが呼ばれる前にコンポーネントの状態を変更したい場合はここ
    componentWillMount() {
        console.log('componentWIllMount');
    }

    // 実際のDOMが表示された後に呼び出されるメソッド
    componentDidMount() {
        console.log('componentDidMount');
        this.timerId = setInterval(
            () => this.tick(), 1000
        );
    }

    // setPropsによるプロパティの更新時
    // 親コンポーネントのプロパティが変更されたタイミングで呼ばれる
    // 新しいpropsnの値をもとにコンポーネントの状態を変更したり、色々な処理を行うためのメソッド
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    // 変更前
    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
        clearInterval(this.timerId);
    }

    tick() {
        console.log('tick');
        this.setState({
            date: new Date()
        });
    }

    render() {
        console.log('render');
        return (
            <div>
                <h1> Hello world3 !</h1>
                <h2>It is {this.state.date.toLocaleTimeString() } .</h2>
            </div>
        )
    }
}

const clock3 = ReactDOM.render(
    <Clock3/>,
    document.getElementById('app6')
);

