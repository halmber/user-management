# User Management Table

This project is a user management table application built with React, Redux Toolkit, and TypeScript. The table displays user information fetched from a mock API and includes advanced filtering functionality.

## Features

- **User Management Table**: Displays user information (name, username, email, phone) fetched from a mock API.
- **Advanced Filtering**:
  - **Client-Side Filtering (Main Branch)**: The `main` branch implements client-side filtering, allowing users to filter the table by name, username, email, and phone with real-time updates.
  - **Server-Side Filtering with Debouncing (Debounced-Server-Filtering Branch)**: The `debounced-server-filtering` branch features server-side filtering. Requests are sent to the server with query parameters using a debounced function to reduce the number of API calls.
- **Reusable Components**: The project utilizes the `clxs` utility with `twMerge` (referred to as `cn`) to create reusable components with consistent styling.
- **State Management**: Utilizes Redux Toolkit for managing the application's state.
- **Type Safety**: TypeScript is used throughout the application to ensure type safety.
- **Responsive Design**: Styled with Tailwind CSS for a clean and responsive user interface.
- **Axios for API Requests**: Axios is used for making HTTP requests to fetch user data from the server.

## Technologies Used

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Redux Toolkit](https://redux-toolkit.js.org/) - A set of tools to simplify Redux development.
- [React-Redux](https://react-redux.js.org/) - Official React bindings for Redux.
- [Axios](https://axios-http.com/) - A promise-based HTTP client for making API requests.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
- [TypeScript](https://www.typescriptlang.org/) - A strongly typed programming language that builds on JavaScript.
- [Vite](https://vitejs.dev/) - A fast development build tool for modern web projects.

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/halmber/user-management.git
   cd user-management
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Build for production:**

   ```bash
   npm run build
   ```

## API Reference

This project uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API to fetch user data.

- **Fetch All Users**: `GET /users`

## Branches

- **Main Branch**: Implements client-side filtering of user data.
- **Debounced-Server-Filtering Branch**: Implements server-side filtering with debounced API calls using query parameters.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you would like to contribute to this project.

## License

This project is licensed under the MIT License.
