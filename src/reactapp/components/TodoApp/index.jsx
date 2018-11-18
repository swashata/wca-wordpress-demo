import * as React from 'react';
import uuid from 'uuid/v4';
import classNames from 'classnames';
import { hot } from 'react-hot-loader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import TodoHeading from './TodoHeading';

// Get style
import './style.scss';

// Create our application
class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		const todos = TodoApp.getTodosFromLocalStorage() || [
			{
				id: uuid(),
				label: 'Add some todos',
				done: false,
			},
			{
				id: uuid(),
				label: 'I am done',
				done: true,
			},
		];
		this.state = {
			todos,
			input: '',
			filter: 'all',
		};
	}

	componentDidUpdate() {
		// Save todos in localStorage
		const { todos } = this.state;
		if (window.localStorage) {
			window.localStorage.setItem('todos', JSON.stringify(todos));
		}
	}

	static getTodosFromLocalStorage() {
		if (window.localStorage) {
			const savedTodos = window.localStorage.getItem('todos');
			if (savedTodos) {
				try {
					return JSON.parse(savedTodos);
				} catch (e) {
					// Do nothing
					return null;
				}
			}
		}
		return null;
	}

	// Handler for input
	handleInput = e => {
		this.setState({ input: e.target.value });
	};

	// Set todo filter
	setFilter = filter => {
		this.setState({ filter });
	};

	// Sort todos, with not done at first, then done
	sortTodos = todos => [
		...todos.filter(todo => !todo.done),
		...todos.filter(todo => todo.done),
	];

	// Add a new todo
	addTodo = () => {
		// e.preventDefault();
		this.setState(state => {
			if (state.input === '') {
				return null;
			}
			const todos = [
				...state.todos,
				{
					id: uuid(),
					done: false,
					label: state.input,
				},
			];
			return { todos: this.sortTodos(todos), input: '' };
		});
	};

	// Get todos based on filters
	getTodos = () => {
		const { filter, todos } = this.state;
		if (filter === 'all') {
			return todos;
		}
		const todoState = filter === 'done';
		return todos.filter(todo => todo.done === todoState);
	};

	// Toggle the todo done state
	toggleTodo = id => {
		this.setState(state => {
			const todos = state.todos.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						done: !todo.done,
						// we override id, to make the animation
						id: uuid(),
					};
				}
				return todo;
			});
			return {
				todos: this.sortTodos(todos),
			};
		});
	};

	deleteTodo = id => {
		this.setState(state => ({
			todos: state.todos.filter(todo => todo.id !== id),
		}));
	};

	render() {
		const { filter, input } = this.state;
		const filters = ['all', 'active', 'done'];
		return (
			<section className="section todo-app">
				<div className="container">
					<nav className="panel todo-app__panel">
						<TodoHeading title="Todo Application" />
						<div className="panel-block">
							<TodoForm
								addTodo={this.addTodo}
								handleInput={this.handleInput}
								input={input}
							/>
						</div>
						<div className="panel-tabs todo-app__tabs">
							{filters.map(f => (
								<a
									key={f}
									href="#"
									onClick={e => {
										e.preventDefault();
										this.setFilter(f);
									}}
									className={classNames({
										'is-active': filter === f,
									})}
								>
									{f}
								</a>
							))}
						</div>
						<TodoList
							todos={this.getTodos()}
							toggleTodo={this.toggleTodo}
							deleteTodo={this.deleteTodo}
						/>
					</nav>
				</div>
			</section>
		);
	}
}

export default hot(module)(TodoApp);
