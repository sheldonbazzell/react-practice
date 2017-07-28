import React, {Component} from 'react';
import ItemInput from '../ItemInput/ItemInput';
import Item from '../Item/Item';


class TodoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.createItem = this.createItem.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    createItem(item) {
        let newItems = this.state.items;
        newItems.push({item:item, done:false})
        this.setState(() => ({items:newItems}));
    }
    handleCheck(idx) {
        let newItems = this.state.items;
        newItems[idx]['done'] = !this.state.items[idx].done;
        this.setState(() => ({items:newItems}));
    }
    handleDelete(idx) {
        let newItems = this.state.items.filter((item, jdx) => jdx !== idx);
        this.setState(() => ({items:newItems}));
    }
    render() {
        return (
            <div id="todo-container">
                <ItemInput createItem={this.createItem} />
                {this.state.items.map(
                    (item, idx) => {
                        return <Item
                            key={idx}
                            item={item}
                            handleDelete={this.handleDelete.bind(null, idx)}
                            line={this.state.items[idx].done ? 'line-through' : null}
                            handleCheck={this.handleCheck.bind(null, idx)}
                        />
                    }
                )}
            </div>
        )
    }
}

export default TodoContainer;