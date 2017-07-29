import React, {Component} from 'react';
import './Items.css';
import {ListGroup,ListGroupItem} from 'react-bootstrap';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalTime: 0
        }
    }
    render() {
        let time = this.props.items.reduce((sum, item) => sum + Number(item.time), 0);
        if (time === 0) time = null; 
        return (
            <div>
                <ListGroup>
                    <span>{time}</span>
                    {this.props.items.map((item, jdx) => {
                        return (
                            <ListGroupItem key={item.id}>
                                <span>{item.title}</span>
                                <span>{item.description}</span>
                                <span style={{float:'right'}}>{item.time}</span>
                            </ListGroupItem>
                        )
                    })}
                </ListGroup>
            </div>
        )
    }
}

export default Items;