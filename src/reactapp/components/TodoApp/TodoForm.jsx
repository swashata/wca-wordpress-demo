import * as React from 'react';
import SvgPlus from '../SvgPlus';

const TodoForm = ({ input, addTodo, handleInput }) => (
	<form
		action=""
		className="todo-app__form"
		onSubmit={e => {
			e.preventDefault();
			addTodo();
		}}
	>
		<div className="field">
			<div className="control todo-app__widget">
				<input
					type="text"
					className="todo-app__input input is-rounded is-medium"
					placeholder="add new todos"
					value={input}
					onChange={handleInput}
				/>
				<button
					type="submit"
					className="todo-app__submit button is-success is-rounded is-medium"
				>
					<SvgPlus />
				</button>
			</div>
		</div>
	</form>
);

export default TodoForm;
