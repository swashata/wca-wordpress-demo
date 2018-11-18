This is an example plugin to showcase working of `@wpackio/scripts`. It has
the following features.

1. Using [React](https://reactjs.org) and [React Hot Loader](https://github.com/gaearon/react-hot-loader)
   for best in kind DX.
2. Using [Sass](https://sass-lang.com/) on react components.

## Getting Started

1. Clone this repository.
2. Make sure you have [docker](https://www.docker.com/) and [composer](https://getcomposer.org/) installed on your machine.
3. Install all composer dependency (just `wpackio/enqueue` in our case).

   ```bash
   composer install
   ```

4. Run the following command from this directory `examples/plugin`.

   ```bash
   docker-compose up -d && docker-compose logs -f wordpress
   ```

   Wait until the build is complete. Then press <kbd>ctrl</kbd> + <kbd>c</kbd>.

   ```bash
   npm start
   ```

   This will open up the development server within your network LAN Ip address.

   Note that due to how `file:` dependency works with `npm`, it might throw some
   error. We recommend using `yarn`, until the issue is resolved. This is just
   for checking out this demo. In your own project, both `npm` and `yarn` will
   work fine.

5. Now log into your WordPress dashboard with:
   a. Username: `root`
   b. Password: `root`
6. Activate `WPack.io Sample Plugin Development` plugin.
7. Check the homepage and check your browser's console.

> It is not a requirement to use docker for `@wpackio/scripts`. It is just
> required for this example. You can very well spin up any local server you
> are comfortable with.

## Checking some HMR

Now go ahead and edit the contents in file `src/reactapp/components/*`. Check it
load live in your console.

If you edit any of the entrypoints like `src/reactapp/index.jsx`, then you will see
full page reload.

With the help of browsersync, we also watch for files inside `inc/**/*.php`. So
go ahead and edit them. The page will reload.

## Doing some react stuff

![react-stuff](./reactapp.gif)

We have created a simple shortcode `[wpackio-reactapp]`. Publish it in any page
and this will create a todo app.

Edit files under `src/reactapp/` and see them refresh live (without page reload).

This is done with the help of [react-hot-loader](https://github.com/gaearon/react-hot-loader).

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
