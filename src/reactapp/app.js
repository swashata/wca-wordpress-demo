import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style.scss';

// Get our components
import TodoApp from './components/TodoApp';

// Render our application
document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<TodoApp />, document.querySelector('#wpackio-reactapp'));
	// Let's Hot Module Replace the main TodoApp component
	// module.hot is provided by WebPack
	if (module.hot) {
		module.hot.accept('./components/TodoApp', () => {
			// eslint-disable-next-line global-require
			const NewTodoApp = require('./components/TodoApp').default;
			ReactDOM.render(
				<NewTodoApp />,
				document.querySelector('#wpackio-reactapp')
			);
		});
	}
});
