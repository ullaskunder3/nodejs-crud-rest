# RESTapi

## Buidling CRUD api using nodejs, express & thunder clinet (vs code extension)

# 

- A REST API (also known as RESTful API) is an application programming interface (API or web API) that conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.

- A controller determines what response to send back to a user when a user makes a browser request.

- Routing refers to how an application’s endpoints (URIs) respond to client requests.
  - Routing refers to determining how an application responds to a client request to a particular endpoint, 
  - which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

## Routes

```js
GET/users :Find all users

POST/users :Create a users

GET/users/:id :Find user details

DELETE/users/:id :Delete a user

PATCH/users/:id :Update a user
```

project dir

```cmd
│   .gitignore
│   index.js
|   node_modules
│   package-lock.json
│   package.json
│   README.md
│
├───controllers
│       users.js
│
└───routes
        users.js
```