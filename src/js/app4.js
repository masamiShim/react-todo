import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'default value'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(this.state.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>component:<br/>
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                </label><br/>
                <button type="submit" className="btn">アラート出す</button>
            </form>
        );
    }
}

ReactDOM.render(<Form/>, document.getElementById('app2'))


class MultipleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(this.state.isGoing + ' & ' + this.state.numberOfGuests);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    Number Of Guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange}/>
                </label>
                <br/>
                <button type="submit" className="btn">アラート出す</button>
            </form>
        );
    }
}

ReactDOM.render(
    <MultipleForm/>,
    document.getElementById('app3')
);