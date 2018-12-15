import React from 'react';

export default class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            val: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log('Search HandleChange');
        let inputVal = e.target.value;
        this.setState({
            val: inputVal
        });
        this.props.callBackSearch(inputVal);
    }

    render() {
        return (
            <div className="searchBox">
                <i className="fa fa-search searchBox__icon" aria-hidden="true"/>
                <input type="text" className="searchBox__input" onChange={this.handleChange} value={this.state.val}
                       placeholder="something keyword"/>
            </div>
        );
    }

}