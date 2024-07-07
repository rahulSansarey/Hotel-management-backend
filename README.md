# Hotel management backend(Leaning Project)

A robust hotel management learning application built using Node.js and Express. This application features complete CRUD functionality for managing hotel data, along with secure user authentication and authorization. It allows users to create, read, update, and delete hotel information while ensuring only authorized users can access specific features. Perfect for educational purposes, it demonstrates best practices in back-end development, database interactions, and security implementations.

## 🚀 About Me

I'm Rahul Kumar learning new Technologies and creating some basic projects to understand the use case if you're learning you can follow this project.

## Technologies that I have used in this project

**Server:** Node, Express

**Database:** MongoDB

**API testing ** POSTMAN

## Installation

To run this project follw the below command

```bash
  npm i
  nodemon server.js
```

## API Request in this project(CRUD)

for Post:

```bash
  http://localhost:3000/menu
```

To get the data;

```bash
  http://localhost:3000/getmenu
```

To Updata the data;

```bash
  http://localhost:3000/updatemenu/objectIdOfMongoDB
```

To delete the data;

```bash
 http://localhost:3000/deletemenu/objectIdOfMongoDB
```


To access the data as a Parametrized way only category like I can access on veg items or nonveg Items;
get method
```bash
 http://localhost:3000/menu/nonveg
 http://localhost:3000/menu/veg
```

