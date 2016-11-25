# Boilerplate
This is my basic setup for playing with JavaScript. It uses Webpack as a task runner, Babel for transpiling ES2015 into browser-friendly ES5, and Webpack Dev Server for serving up the files.

## Getting Started
To make sure things are working, run `npm run serve`, which will start up the dev server. Navigate to localhost on the given port, followed by 'app' (the name of the compiled file). So, for example `localhost:8080/app`. You should see a console log saying "Hello". Make a change to src/index.js, such as changing the console log to say "Hello, World!". Go back to the browser, and you should see the page reload and display your new changes.

If you are satisfied with what you have, just run `npm run build`, which will actually make the app.js file in bin. If you want to build for production, just run `npm run build:prod`. 
