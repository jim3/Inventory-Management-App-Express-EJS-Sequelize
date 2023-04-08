## RESTful API Inventory App for Fasteners

A Node/Express web app that uses the Sequelize ORM to interact with a SQLite3 database. Front-end is built HTML and EJS.

### Description

A "work-in-progress" project to create a RESTful API for a basic inventory management application for fasteners. The app is built with Node.js, Express, EJS template engine and Sequelize ORM. The database is SQLite3.<br>

---
### API Endpoints

| Method | Endpoint   | Description    |
| ------ | ---------- | -------------- |
| GET    | /parts     | Read all parts |
| GET    | /parts/:id | Read one part  |
| POST   | /parts     | Create a part  |
| PUT    | /parts/:id | Update a part  |
| DELETE | /parts/:id | Delete a part  |

---

#### Installation

-   Install Node.js
-   Create your database (e.g. SQLite3, MySQL, Postgres, etc.)
-   Clone the repo
-   Run `npm install`
-   Run `node index.js`
-   Navigate to `localhost:3000`

---
