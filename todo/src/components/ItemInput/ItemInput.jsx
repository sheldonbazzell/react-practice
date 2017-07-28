import React, {Component} from 'react';

class ItemInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(e) {
        let value = e.target.value;
        this.setState(() => ({item:value}));
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.props.createItem(this.state.item);
            e.target.value = "";
        }
    }

    render() {
        return (
            <div>
                <input
                    placeholder="What needs to be done?"
                    type="text"
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
            </div>
        )
    }
}

export default ItemInput;