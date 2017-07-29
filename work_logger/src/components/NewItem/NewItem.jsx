import React, {Component} from 'react';
import {FormGroup, FormControl,
    ControlLabel, HelpBlock,Button} from 'react-bootstrap';
import './NewItem.css';

class NewItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: "",
            select: null,
            time: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.descriptionValidationState = this.descriptionValidationState.bind(this);
    }
    descriptionValidationState() {
        const length = this.state.description.length;
        if (length > 4) return 'success';
        else if (length > 0) return 'error';
    }
    handleChange(e) {
        this.setState({ description: e.target.value });
    }
    handleSelect(e) {
        this.setState({ select: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.state);
    }

    handleTimeChange(e) {
        if (e.target.value > 240) e.target.value = 240;
        else this.setState({ time: e.target.value });
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Project</ControlLabel>
                    <FormControl
                        componentClass="select"
                        placeholder="Project"
                        onChange={this.handleSelect}                        
                    >
                        <option disabled selected>Please Select...</option>
                        <option value="personal">Personal</option>
                        <option value="work">Work</option>
                    </FormControl>
                </FormGroup>
                <FormGroup
                    controlId="description"
                    validationState={this.descriptionValidationState()}
                >
                    <ControlLabel>Description</ControlLabel>                    
                    <FormControl
                        type="text"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Description should be at least 5 characters.</HelpBlock>
                </FormGroup>
                <FormGroup
                    controlId="time"
                >
                    <ControlLabel>Time</ControlLabel>                    
                    <FormControl
                        type="number"
                        min="0"
                        max="240"
                        onChange={this.handleTimeChange}                       
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Time in minutes between 0 and 240.</HelpBlock>
                </FormGroup>
                <Button
                    type="submit"
                    disabled={this.state.description.length < 5 ? true : false }
                >
                    Submit
                </Button>
            </form>
        )
    }
}

export default NewItem;