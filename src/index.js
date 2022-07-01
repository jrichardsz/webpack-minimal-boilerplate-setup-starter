import './css/main.css';
import template from './pages/template.html';

import ejs from 'ejs/ejs.min.js';
let users = ['geddy', 'neil', 'alex'];
let html = ejs.render(template, {users: users});

console.log("hello world!!");
console.log("raw template");
console.log(template);
console.log("evaluated template");
console.log(html);
