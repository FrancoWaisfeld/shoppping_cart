# Shopping Cart App

The Shopping Cart App allows users to create new products, specify quantities, and add them to a cart for checkout. This application is built using Express.js and React.js.

## Installation

### Prerequisites

- Install [Node.js](https://nodejs.org/en/download/package-manager/) if you haven't already.

### Steps

1. Clone this repository.
2. Navigate to the downloaded directory:

```bash
cd path/to/your/repository
```

3. Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

4. Navigate to the client directory and install dependencies:

```bash
cd client
npm install
```

### Database Setup

1. Create a MongoDB account: [Register here](https://account.mongodb.com/account/register).
2. Set up a free AWS cluster.
3. Create a new database (e.g., `shopping_cart`) with two collections: `products` and `cartitems`.
   - If working in pairs, create separate databases for each team (e.g., `team1_shopping`, `team2_shopping`), each with the same collections.
4. Add a new database user under the Security tab in Database Access, providing a username and password.
5. Whitelist your IP address under the Security tab in Network Access.
6. Connect to your cluster:
   - Copy the connection string from the Clusters tab (e.g., `mongodb+srv://<username>:<password>@cluster0-zamyu.mongodb.net/`).
   - Replace `<username>`, `<password>`, and `test` with your credentials and database name.
   - Example connection string: `mongodb+srv://test123:mypass@cluster0-zamyu.mongodb.net/shopping_cart?retryWrites=true&w=majority`.
7. Create a `.env` file in the server directory and add your connection string:
   ```plaintext
   DB=mongodb+srv://<username>:<password>@cluster0-zamyu.mongodb.net/<databaseName>?retryWrites=true&w=majority
   ```

## Usage

### Developing the App

- The entry point of the application is `/client/src/index.js`, where the root component `App` is rendered to the DOM.
- Add new components to the `/client/src/components` folder.
- Add test files to the `/client/src/tests` folder.

## Features

- Create and manage products and quantities.
- Add products to a shopping cart.
- Checkout functionality.
- Built with Express.js and React.js for a dynamic user experience.

## Documentation

Additional documentation can be found in the `docs` folder, specifically in the `api.md` file.
