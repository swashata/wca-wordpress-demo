This is an example plugin to showcase working of [`@wpackio/scripts`](https://wpack.io). It has
the following features.

1. Custom implement HMR with webpack.
2. Using [Sass](https://sass-lang.com/) on react components.

## Getting Started

1. Clone this repository.
2. Make sure you have [docker](https://www.docker.com/) and [composer](https://getcomposer.org/) installed on your machine.
3. Install all node dependencies.

    ```bash
    npm i
    ```

4. Install all composer dependency (just `wpackio/enqueue` in our case).

    ```bash
    composer install
    ```

5. Run the following command from this directory `examples/plugin`.

    ```bash
    npm run docker:up
    ```

    This basically runs the following command.

    ```bash
    docker-compose up -d && docker-compose logs -f wordpress
    ```

    Wait until the build is complete. This will give you a WordPress development
    server at `http://localhost:8080`. Then press <kbd>ctrl</kbd> + <kbd>c</kbd>.

    ```bash
    npm start
    ```

    This will open up the development server within your network LAN Ip address.

    Note that due to how `file:` dependency works with `npm`, it might throw some
    error. We recommend using `yarn`, until the issue is resolved. This is just
    for checking out this demo. In your own project, both `npm` and `yarn` will
    work fine.

6. Now log into your WordPress dashboard with the credentials given below.
7. Activate `WPack.io Sample Plugin Development` plugin.
8. Check the homepage and check your browser's console.

> It is not a requirement to use docker for `@wpackio/scripts`. It is just
> required for this example. You can very well spin up any local server you
> are comfortable with.

**Docker WP Dev Server**

-   URL: http://localhost:8080
-   Username: `root`
-   Password: `root`

## Checking some HMR

Now go ahead and edit the contents in file `src/reactapp/components/*`. Check it
load live in your console.

If you edit any of the entrypoints like `src/reactapp/index.jsx`, then you will see
full page reload.

With the help of browsersync, we also watch for files inside `inc/**/*.php`. So
go ahead and edit them. The page will reload.

## Doing some react stuff

[![Alt text](https://img.youtube.com/vi/6Jmiy0mb6P8/0.jpg)](https://www.youtube.com/watch?v=6Jmiy0mb6P8)

We have created a simple shortcode `[wpackio-reactapp]`. Publish it in any page
and this will create a todo app.

Edit files under `src/reactapp/` and see them refresh live (without page reload).

This is done with the help this code within the entry-point.

```js
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
```

## Building Files

Run

```bash
npm run build
```

## Creating distributable package

Run

```bash
npm run archive
```

## License

[`GPL-3.0`](https://opensource.org/licenses/GPL-3.0).
