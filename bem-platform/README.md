# holy-grail-markup implementation on BEM Platform

Based on [project-stub](https://github.com/bem/project-stub).

## Supported browsers

The list of supported browsers depends on the [bem-core](https://en.bem.info/libs/bem-core/current/#supported-browsers) and [bem-components](https://en.bem.info/libs/bem-components/current/#supported-browsers) library versions.

**Note:** Internet Explorer 8.0 is not supported by default. To support IE8 you must follow the [recomendations](https://en.bem.info/libs/bem-components/current/#support-for-internet-explorer-8).

### Build the project

```bash
npm install
enb make
```
or
```bash
npm install
gulp
```

### The basic commands

Execute the following commands in your terminal.

#### Start the dev server

```bash
./node_modules/.bin/enb server
```

You could use the `npm start` command to start the `enb server` without specifying the full path to the `node_modules`.

```bash
npm start
```

The development server is running. To check it out, navigate to [http://localhost:8080/desktop.bundles/index/index.html](http://localhost:8080/desktop.bundles/index/index.html).

You may also specify different port if `8080` is already taken by some other service:

```bash
npm start -- --port=8181
```

#### Stop the server

Press `Ctrl` + `C` while the terminal is your active window to stop the server.

#### Add a block

It is possible to create blocks with `bem create` command:

```bash
bem create new-block
```

#### Add a page

```bash
mkdir -p desktop.bundles/page
touch desktop.bundles/page/page.bemjson.js
```

And add following content:
```js
module.exports = {
    block: 'page',
    title: 'page',
    head: [
        { elem: 'css', url: 'page.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'page.min.js' }],
    content: [
       {
           block: 'new-block',
           content: [
               'block content'
           ]
       }
    ]
};
```

## Docs

- [Static page quick-start](https://en.bem.info/platform/tutorials/quick-start-static/)
- [Starting your own BEM project](https://en.bem.info/platform/tutorials/start-with-project-stub/)
- [Tutorial for BEMJSON template-engine](https://en.bem.info/platform/bemjson/)
- [Tutorial on BEMHTML](https://en.bem.info/platform/bem-xjst/)
- [Tutorial on i-bem.js](https://en.bem.info/platform/tutorials/i-bem/)

## Project-stub based projects

- [SSSR (Social Services Search Robot)](https://github.com/bem/sssr) — study app with BEM full-stack

## Videos

- [BEM - Building 'em modular](https://www.youtube.com/watch?v=huQp7gr3WPE)
- [BEM for JavaScript Talk on Camp JS](https://en.bem.info/talks/campjs-melbourne-2014/)
