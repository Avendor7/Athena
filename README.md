

Athena - Overwatch Competitive Game Tracker
===========================================

## Requirements and Setup ##

Requirements

 - Node
 - Bower
 - MySQL

## Client ##

Install Client

    $ npm install && bower install
Start Client

    $ ember serve
    
    http://localhost:4200

Build Client

    $ ember build

## Server ##

Server is Express with Sequelize to manage the MySQL database. Sequelize-cli

Install Server

    $ npm install
    $ npm install -g sequelize-cli
Migrations
Sequelize-cli will create the migrations and run them on your development or production server

	$ sequelize migration:create
    $ sequelize db:migrate 
## Licence - MIT ##
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.