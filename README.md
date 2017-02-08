# Hello to [LuisMorrison.com](https://luismorrison.com)

This project relies in the following open source technologies to work:

* [jQuery] - New Wave JavaScript Framework
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Bower] - A package manager for the web
* [Gulp] - the streaming build system
* [Font Awesome] -  The iconic font and CSS toolkit
* [Simple Line Icons] - Simple and Minimal Line WebFont Icons

### Installation

This project requires [Node.js](https://nodejs.org/) v4+. From the root folder of this project...

```sh
$ cd public
$ npm install
```

Then install Bower and download components...

```sh
$ npm install -g bower
$ bower update
```

### Start the server

When you have installed your enviroment, its time to make a build and then start servig the files. You can accomplish so by casting this both commands:

```sh
$ gulp build
$ gulp serve
```

#### Publish project assets

Once you have finished, publish you code to test in production by doing...

```sh
$ gulp publish
```

**Note** that when you clone this project, _can include or not_ a file named `aws.json` in the `/public` folder. This file is an Amazon S3 configuration settings that would be used for the `publish` command, and has the following format:

```json
{
  "key": "AWS_PUBLIC_KEY",
  "secret": "AWS_SECRET_KEY",
  "bucket": "BUCKET_NAME",
  "region": "ACCOUNT_REGION - P.E. 'us-east-1'"
}
```

   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [Bower]: <https://bower.io>
   [Gulp]: <http://gulpjs.com>
   [Font Awesome]: <http://fontawesome.io>
   [Simple Line Icons]: <http://simplelineicons.com>
