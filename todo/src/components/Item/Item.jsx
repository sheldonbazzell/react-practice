import React, {Component} from 'react';
import './Item.css';

function Check(props) {
    return (
        <input 
            className="check"
            type="checkbox"
            onClick={props.check}
        />
    )
}

function Delete(props) {
    return (
        <div
            className="delete"
            onClick={props.delete}
        >
            X
        </div>
    )
}

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleHover = this.handleHover.bind(this);
    }
    handleHover() {
        this.setState(() => ({hovered:!this.state.hovered}));
    }
    handleDelete() {
        this.props.handleDelete();
    }
    render() {
        return (
            <div
                className="item"
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHover}
            >
                <Check
                    checked={this.props.item.checked}
                    check={this.props.handleCheck}
                />
                <div
                    className="text"
                    style={{'textDecoration':this.props.line}}
                >
                    {this.props.item.item}
                </div>
                {this.state.hovered &&
                    <Delete 
                        delete={this.handleDelete} 
                    />
                }
            </div>
        )
    }
}

export default Item;