## RESTful API Inventory App for Fasteners

A Node/Express web app that uses the Sequelize ORM to interact with a SQLite3 database. Front-end is built with HTML, CSS, JavaScript & EJS.

### Description

A RESTful API for a inventory management application for parts (fasteners).

### Features

-   Create, Read, Update and Delete parts (CRUD)

### Tech Stack

-   Node.js
-   Express
-   EJS
-   Sequelize ORM
-   SQLite3

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

-   Clone the repo
-   Run `npm install`
-   Run `node index.js`
-   Navigate to `localhost:3000`

---

#### Example of API call

`${localhost}/api/parts`

#### Example of API response

```json
[
    {
        "id": 1,
        "partType": "hex",
        "partName": "nuts",
        "quantity": 100,
        "price": 0.08,
        "createdAt": "2023-04-07T20:16:13.575Z",
        "updatedAt": "2023-04-07T20:16:13.575Z"
    },
    {
        "id": 2,
        "partType": "lock",
        "partName": "washers",
        "quantity": 50,
        "price": 0.12,
        "createdAt": "2023-04-07T20:37:26.849Z",
        "updatedAt": "2023-04-07T20:37:26.849Z"
    },
    {
        "id": 3,
        "partType": "wood",
        "partName": "screws",
        "quantity": 60,
        "price": 0.25,
        "createdAt": "2023-04-07T20:37:51.159Z",
        "updatedAt": "2023-04-08T02:15:27.530Z"
    }
]
```

---

#### Things planned to implement

-   Search for parts by part type, part name, quantity and price
-   Sort parts by part type, part name, quantity and price
-   Create a user account
-   Authentication
-   Authorization

---
