# SPA Boilerplate Setup Starter

This is my personal `webpack` configuration, that I am using for small static projects or as starter for libraries development.

Feel free to contribute, improve or use it for your projects.


### Contains some neat stuff out of the box!

- Webpack
- Babel
- [Ejs](https://ejs.co/)


### Requirements

- Nodejs 14 as a minimum

### Commands?

It's pretty easy... You do not have a bunch of commands, just two of them:

- `npm install` – to install libraries
- `npm run dev` – to start with development
- `npm run build` - to make it ready for production use


### Pages

You could add any plain html or with ejs in this folder **src/pages**.

Then you could import it with **import template from '../pages/template.html';**

### Listeners

This framework is based on events and its listeners:

- When page is loaded, an **EntryPointEvent** event is triggered
- If a listener with name src/listeners**/EntryPointEventListener.js** exist and mapped, it is executed automatically.

```
var _CONTEXT = {};
_CONTEXT["EntryPointEventListener"] = new EntryPointEventListener();
```

You could use this to add more Listeners for example:

- buttons
- open pages
- etc

### Roadmap

- Using webpack loaders, register automatically the Listeners on `var _CONTEXT = {}`

### Contributors

Thanks goes to these wonderful people :

<table>
  <tbody>
    <td>
      <img src="https://avatars0.githubusercontent.com/u/3322836?s=460&v=4" width="100px;"/>
      <br />
      <label><a href="http://jrichardsz.github.io/">JRichardsz</a></label>
      <br />
    </td>    
  </tbody>
</table>
