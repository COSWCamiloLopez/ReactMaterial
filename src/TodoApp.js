import React from 'react';
import moment from "moment";
import {TodoList} from "./TodoList";
import 'react-datepicker/dist/react-datepicker.css';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import {FormControl, Typography} from "@material-ui/core";

export class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <form className="todo-form">
                    <Typography variant="headline"> New TODO </Typography>

                    <br/>
                    <FormControl margin="normal" fullWidth>
                        <Input
                            placeholder="Text"
                            id="text"
                            onChange={this.handleTextChange}
                            value={this.state.text}>
                        </Input>
                    </FormControl>

                    <br/>
                    <br/>

                    <FormControl margin="normal" fullWidth>
                        <Input
                            placeholder="Priority"
                            id="priority"
                            type="number"
                            onChange={this.handlePriorityChange}
                            value={this.state.priority}>
                        </Input>
                    </FormControl>

                    <br/>
                    <br/>

                    <FormControl margin="normal" fullWidth>
                        <TextField
                            type="date"
                            id="due-date"
                            selected={this.state.dueDate}
                            placeholderText="Due date"
                            onChange={this.handleDateChange}>
                        </TextField>
                    </FormControl>

                    <br/>
                    <br/>

                    <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                        onClick={this.handleSubmit}
                    >
                        Add #{this.state.items.length + 1}
                    </Button>
                </form>

                <br/>
                <br/>

                <TodoList todoList={this.state.items}/>
            </div>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {

        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }
}