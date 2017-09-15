Athena - Overwatch Competitive Game Tracker
===========================================

Requirements
------------
Please ensure the following tools are installed on your system:

 - Node.js
 - MySQL
 - Sequelize-cli installed globally (`npm i -g sequelize-cli`)

Install
-------
### Client ###
```bash
$ cd client
$ npm install
$ cp config/local.js.example config/local.js 
```
update `config/local.js` with values as needed

### Server ###
```bash
$ cd server
$ npm install
$ cp config/local.js.example config/local.js 
```
update `config/local.js` with values as needed

After configuring your `config/local.js` file, you can create the database:
```bash
$ sequelize init
$ sequelize db:migrate
```

Start
-----
### Client ###
```bash
$ cd client
$ npm start
```
By default, the client is hosted at https://localhost:4200
You will have to accept the self-signed snakeoil ssl certificate on your first visit

### Server ###
```bash
$ cd server
$ npm start
```
By default, the server is hosted at https://localhost:3000
You will have to accept the self-signed snakeoil ssl certificate on your first visit