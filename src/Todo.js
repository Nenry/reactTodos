import React from 'react';
import './App.css';
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {newTodo: '', todos: []};
  }


  handleChange(e) {
    this.setState({newTodo: e.target.value});
  }

  createNew() {
    let todoName = this.state.newTodo;
    const todoObj = {title: todoName, status: 0, clicked: false};

    this.setState({todos: [...this.state.todos, todoObj]});
    this.setState({newTodo:  ''});
  }

  highlight(idx1) {
    const updatedList = [];
    this.state.todos.forEach((todo, idx2) => {
      if (idx1 === idx2 ) {
        const todoObj = {title: todo.title, status: todo.status, clicked: !todo.clicked};
        updatedList.push(todoObj);
      } else {
        updatedList.push(todo);
      }
    });

    this.setState({todos : updatedList});
  }

  render() {
    return (
      <div>
        
        <div>New</div>
        <ul>
        {this.state.todos.map((todo, idx) => <li className={todo.clicked ? 'highlight' : ''} onClick={() => this.highlight(idx)} key={idx}>{todo.title}</li>)}
        </ul>
        <button>Right</button>
        <button>Left</button>
        <div>In progress</div>
        <button>Right</button>
        <button>Left</button>
        <div>Completed</div>

        
          <input type='text' onChange= {(e) => this.handleChange(e)} value={this.state.newTodo}></input>
          <button onClick= {(e) => this.createNew(e)}>Create Todo</button>
      </div>
    );
  }



}