

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

    $ sequelize init
    $ sequelize db:migrate 

Rollback migration

    $ sequelize db:migrate:undo
