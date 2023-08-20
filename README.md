# recipe-queen

A recipe website built using Node.js, Express.js for the backend and React for the frontend.

## Introduction

This project is a recipe viewing website that allows users to discover and view various recipes. The website provides a user-friendly interface to search, filter, and explore recipes from different cuisines and diet types. Users can also bookmark their favorite recipes for future reference.

The backend of the project is built using Node.js and Express.js, providing endpoints to fetch recipe data, handle user authentication, and manage user's bookmarked recipes. The frontend is developed using React, offering a seamless and interactive user experience.

## Features

- Browse a wide range of recipes from different cuisines.
- Filter recipes based on dietary preferences.
- Sort recipes by various attributes such as caffeine, energy, calories, and cholesterol.
- User authentication and authorization for accessing bookmarked recipes.
- Bookmark favorite recipes to view later.
- Responsive design for a consistent experience across different devices.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/DishaGup/recipe-queen.git
   ```

2. Navigate to the project directory:
   ```
   cd view
  
   ```

3. Install backend dependencies:
   ```
   npm install
   ```

4. Install frontend dependencies:
   ```
   cd view
   npm install
   ```

## Usage

1. Start the backend server:
   ```
   cd backend
   npm server
   ```

   The backend server will run on http://localhost:8000.

2. Start the frontend development server:
   ```
   cd frontend
   npm start
   ```

   The frontend development server will run on http://localhost:3000.

3. Open your web browser and navigate to http://localhost:3000 to access the recipe viewing website.

## Technologies

- Backend:
  - Node.js
  - Express.js
  - MongoDB (or your chosen database)
  - Bcrypt.js (for user authentication)
  - JWT (JSON Web Tokens) for secure user sessions

- Frontend:
  - React
  - Chakra UI (for styling and components)
  - React Router (for routing)
  - Redux (for state management)
  - Axios (for API requests)


---

### Environment Variables

#### Backend Environment Variables

Create a `.env` file in your backend project's root directory and add the following environment variables:

```dotenv
MongoDB_URL = YOUR_MONDO_DB_URL
Backend_PORT = 8000
spoonacular_API_KEY = YOUR_API_KEY 
```

- `MongoDB_URL`: MongoDB connection URL.
- `Backend_PORT`: Port number for the backend server.
- `spoonacular_API_KEY`: API key for the Spoonacular API.

#### Frontend Environment Variables

For your frontend project, you can set environment variables in a `.env` file in the root directory of your React app:

```dotenv
REACT_APP_spoonacular_API_KEY =YOUR_API_KEY 
REACT_APP_BACKEND_URL = http://localhost:8000
```

- `REACT_APP_spoonacular_API_KEY`: API key for the Spoonacular API used in the frontend.
- `REACT_APP_BACKEND_URL`: URL of the backend server.


## API Endpoints

### User Registration and Login

#### Register a User

- Method: POST
- URL: `/api/users/register`
- Request Body:
  ```json
  {
    "email": "dummy@example.com",
    "password": "dummy",
    "name": "dummy"
  }
  ```
- Response:
  - Status: 201 Created
  - Body:
    ```json
    {
      "message": "Account created successfully"
    }
    ```

#### Login

- Method: POST
- URL: `/api/users/login`
- Request Body:
  ```json
  {
    "email": "dummy@gmail.com",
    "password": "dummy"
  }
  ```
- Response:
  - Status: 200 OK
  - Body:
    ```json
    {
      "message": "Login Successful",
      "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dnZWRJbkFzIjoiYWRtaW4iLCJpYXQiOjE0MjI3Nzk2Mzh9.gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpyHI",
      "userId": "6489c982c4690f217cd44d66"
    }
    ```

#### Get All Users Data

- Method: GET
- URL: `/api/users`
- Response:
  - Status: 200 OK
  - Body:
    ```json
    [
      {
        "_id": "6489c982c4690f217cd44d66",
        "name": "sara",
        "email": "sara@gmail.com",
        "password": "$2b$04$h8HeyK3ExagumMlGlSDMNuMUg8Byqo3DG8MUGhoQKERb7O5MKNnRK",
        "BookmarkedData": []
      }
      // ... other user objects
    ]
    ```

### Recipe API Endpoints

#### Bookmark a Recipe

- Method: POST
- URL: `/api/recipe/bookmark/:userId/:recipeId`
- Response:
  - Status: 200 OK
  - Body:
    ```json
    {
      "message": "Recipe bookmarked successfully"
    }
    ```

#### Get Bookmarked Recipes

- Method: GET
- URL: `/api/recipe/bookmarked/:userId`
- Response:
  - Status: 200 OK
  - Body:
    ```json
    {
      "bookmarkedRecipeDetails": [
        // ... array of bookmarked recipe details
      ]
    }
    ```

#### Unbookmark a Recipe

- Method: DELETE
- URL: `/api/recipe/unbookmark/:userId/:recipeId`
- Response:
  - Status: 200 OK
  - Body:
    ```json
    {
      "message": "Recipe removed from bookmarks successfully"
    }
    ```

<br/>

## Contributing

Contributions are welcome! If you find a bug or have suggestions for improvements, please open an issue or create a pull request.

## Snapshots 

![homepagesearch](https://github.com/DishaGup/recipe-queen/assets/115460391/6a7e3a62-cb6b-40c3-b2ee-5db85860fb50)

---

![homepageresponsive](https://github.com/DishaGup/recipe-queen/assets/115460391/f34a9c16-f626-4b05-abac-ff530b95de76)

---

![register](https://github.com/DishaGup/recipe-queen/assets/115460391/849d8bf7-40e0-4518-a7e8-db4d90dbcba2)

---

![allrecipe](https://github.com/DishaGup/recipe-queen/assets/115460391/9293b257-185a-4712-b900-922d82f2dbdc)

---

![bookmark](https://github.com/DishaGup/recipe-queen/assets/115460391/26ea8b4b-6493-4cbf-be48-2c2ab4bb3d06)

---

![singlerecipe1](https://github.com/DishaGup/recipe-queen/assets/115460391/76c07ffb-ecb3-4ae6-ae6d-585266b264a8)

---

![singlerecipe2](https://github.com/DishaGup/recipe-queen/assets/115460391/261dfe55-6813-43b9-9455-3acfefeac1b4)


&& more...
