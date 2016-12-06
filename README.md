# Boilerplate

## Synopsis
Basic boilerplate for starting small JS projects

## Installation
Clone down the repo, then run `npm install`. This will pull down all the assets you need. Since you're probably going to want to start your own project, run `git init` to initialize a new repo with these files.

## Motivation
This stuff can be hard to figure out the first time, and everyone tries to make it as difficult and verbose as possible. All I want to do is write some code, try some things out, not necessarily start my new enterprise-level project.

## Usage
To make sure things are working, run `npm run serve`, which will start up the dev server. Navigate to localhost on the given port, followed by 'app' (the name of the compiled file). So, for example `localhost:8080/app`. You should see a console log saying "Hello". Make a change to src/index.js, such as changing the console log to say "Hello, World!". Go back to the browser, and you should see the page reload and display your new changes.

If you are satisfied with what you have, just run `npm run build`, which will actually make the app.js file in bin. If you want to build for production, just run `npm run build:prod`.

## Contributors
If you think you can make this simpler, let me know with a pull request.

## Licence
MIT License

Copyright (c) 2016 Bennie Robinson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 
