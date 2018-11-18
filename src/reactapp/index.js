import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './style.scss';

// Get our components
import TodoApp from './components/TodoApp';

// Render our application
document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<TodoApp />, document.querySelector('#wpackio-reactapp'));
});
