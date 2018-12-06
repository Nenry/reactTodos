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

  

  updateUp() {
    const newList = [];
    this.state.todos.forEach((todo, idx) => {
      if (todo.clicked) {
        newList.push({title: todo.title, status: todo.status - 1 < 0 ? 0 : todo.status - 1, clicked: todo.clicked})
      } else {
        newList.push(todo);
      }
    });

    this.setState({todos: newList});
  }

  updateDown() {
    const newList = [];
    this.state.todos.forEach((todo, idx) => {
      if (todo.clicked) {
        newList.push({title: todo.title, status: todo.status + 1 > 2 ? todo.status : todo.status + 1, clicked: todo.clicked})
      } else {
        newList.push(todo);
      }
    });

    this.setState({todos: newList});
  }

  deleteTodo() {
        const newList = [];
        this.state.todos.forEach((todo, idx) => {
          if (!todo.clicked) {
            newList.push(todo);
          }
        });

        this.setState({
          todos: newList
        });
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
      <div className='todo-wrapper'>
          <div>
            <button onClick={() => this.updateUp()}>Progress Up</button>
            <button onClick={() => this.updateDown()}>Progress Down</button>
            <button onClick={() => this.deleteTodo()}>Delete</button>
          </div>

          <div>

            <div>New</div>
            <ul>
              {this.state.todos.map((todo, idx) => {
                if (todo.status === 0) {   
                  return (
                    <li className={todo.clicked ? 'highlight' : ''} onClick={() => this.highlight(idx)} key={idx}>{todo.title}</li>
                    );
                  }    
                })}
            </ul>
          </div>

          <div>

          <div>In progress</div>
          <ul>

          {this.state.todos.map((todo, idx) => {
            if (todo.status === 1) {   
              return (
                <li className={todo.clicked ? 'highlight' : ''} onClick={() => this.highlight(idx)} key={idx}>{todo.title}</li>
                );
              } 
              
            })}
          </ul>
        
        </div>
        
        <div>

          <div>Completed</div>
          <ul>
          {this.state.todos.map((todo, idx) => {
            if (todo.status === 2) {   
              return (
                <li className={todo.clicked ? 'highlight' : ''} onClick={() => this.highlight(idx)} key={idx}>{todo.title}</li>
                );
              } 
              
            })}
        </ul>
        </div>

        
          <input type='text' onChange= {(e) => this.handleChange(e)} value={this.state.newTodo}></input>
          <button onClick= {(e) => this.createNew(e)}>Create Todo</button>
      </div>
    );
  }



}