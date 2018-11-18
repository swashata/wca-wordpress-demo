import * as React from 'react';
import classNames from 'classnames';
import { Transition, config, animated } from 'react-spring';

// List all todos
const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
	<div className="todo-list">
		{todos.length ? (
			<Transition
				items={todos}
				keys={item => item.id}
				from={{
					transform: 'translate3d(0,-5px,0)',
					opacity: 0,
					height: 0,
				}}
				enter={{
					transform: 'translate3d(0,0px,0)',
					opacity: 1,
					height: 'auto',
				}}
				leave={{ opacity: 0, height: 0 }}
				native
				config={{
					...config.wobbly,
				}}
				trail={100}
			>
				{todo => props => (
					<animated.div style={props} key={todo.id} trail={2000}>
						<a
							className={classNames({
								'panel-block': true,
								'todo-list__block': true,
								'todo-list__block--is-done': todo.done,
							})}
							href="#"
							onClick={e => {
								e.preventDefault();
								toggleTodo(todo.id);
							}}
						>
							<span className="todo-list__status" />
							<span className="todo-list__label">
								{todo.label}
							</span>
							<button
								type="button"
								className="delete is-small"
								onClick={e => {
									e.preventDefault();
									deleteTodo(todo.id);
								}}
							/>
						</a>
					</animated.div>
				)}
			</Transition>
		) : (
			<div className="notification is-warning">
				Nothing to show here. Try adding some todos.
			</div>
		)}
	</div>
);

export default TodoList;
