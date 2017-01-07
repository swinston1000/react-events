import React, { Component } from 'react';
import state from './state';


class Hello extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        var name = prompt('What\'s your name?');
        state.updateName(name);
    }

    render() {
        return (
            <div> 
                <button type="button" onClick={this.handleClick}>Click Me</button> 
                <h4 className="title" > Hello { this.props.name }! </h4>
            </div>
        );
    }
}

Hello.defaultProps = {
    name: 'N/A'
};

Hello.propTypes = {
    name: React.PropTypes.string.isRequired,
};

export default Hello;
