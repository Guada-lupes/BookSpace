# Book Management App

## Table of Contents
- [Book Management App](#book-management-app)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
    - [User Authentication](#user-authentication)
    - [Book Management](#book-management)
    - [Favorites](#favorites)
    - [Admin Dashboard](#admin-dashboard)
  - [Default Users (for testing purposes)](#default-users-for-testing-purposes)
    - [Admin User](#admin-user)
    - [Regular User](#regular-user)
    - [Additional Features](#additional-features)
  - [Technologies Used](#technologies-used)
    - [Frontend](#frontend)
    - [Tools](#tools)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
    - [Key Functionalities:](#key-functionalities)
      - [Regular Users:](#regular-users)
      - [Admins:](#admins)
  - [Contributing](#contributing)
  - [License](#license)
  - [Authors](#authors)
  - [More information:](#more-information)
    - [Project Directory Structure:](#project-directory-structure)

## Introduction
This project is a book and user management platform built with Vite and React. It allows users to explore books, manage favorites, handle administrative tasks (for admins), and perform CRUD operations for both books and user profiles. The app uses React Context for global state management and services due to the application interacting with an array of mock data objects.

## Features

### User Authentication
- Login and registration with roles (admin/user).

### Book Management
- Browse available books.
- Add, edit, or delete books (admin-only).
- Search books by title and literary genres.
- Catalog with 60 mocked books.  

### Favorites
- Save books to a favorites list.

### Admin Dashboard
- Manage users (activate/deactivate, edit roles).
- Oversee all books on the platform.

## Default Users (for testing purposes)

### Admin User
- **Username**: `admin`  
- **Password**: `admin`

### Regular User
- **Username**: `bibliovida`  
- **Password**: `libros123`

> **Security Note**: 🔒 *Change these default credentials before deploying to production environments.*


### Additional Features
- **Responsive Design**: Compatible with multiple devices.
- **Pagination**: Navigate through results seamlessly.
- **Data persistence** in `localStorage`.  

## Technologies Used

### Frontend
- React 
- Vite
- JavaScript (JSX)
- CSS (Component-scoped styles)
- React Router (Navigation)
- Context API (State management)
- Node.js
- HTML

### Tools
- ESLint (Linting)
- Git (Version control)

## Getting Started

Clone the repository:
```sh
git clone http://www.github.com/Guada-lupes/Proyecto-Final--Grupo-1
```

Navigate to the project directory:
```sh
cd Proyecto-Final--Grupo-1
```

Install dependencies:
```sh
npm install
```

## Usage

Start the development server:
```sh
npm run dev
```

Access the app in your browser: [http://localhost:5173](http://localhost:5173).

### Key Functionalities:

#### Regular Users:
- Log in or register (mocked).
- Browse books, add favorites, and manage profiles.

#### Admins:
- Access the admin dashboard via the menu.
- Manage books and users (edit, delete, add new).
- Search: Use the search bar to filter books.
- Pagination: Navigate through result pages.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```sh
   git checkout -b my-new-feature
   ```
3. Commit changes with descriptive messages.
4. Submit a Pull Request explaining your changes.
   
## License
This project is licensed under the **MIT License**.  
For details, see the [LICENSE]  (https://github.com/Guada-lupes/Proyecto-Final--Grupo-1?tab=MIT-1-ov-file) file.

## Authors
- Guadalupe Marándola Ávila 
- Sara del Pozo González 
- Sara Martín Ferrara
- Rebeca Mora González

## More information:
### Project Directory Structure:

```sh
book-management-app/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   │   ├── AddBookForm.jsx
│   │   ├── BackButton.jsx
│   │   ├── DashboardUserDetails.jsx
│   │   ├── DetailsProductComponent.jsx
│   │   ├── EditBookForm.jsx
│   │   ├── EditUserForm.jsx
│   │   ├── EmptyCartComponent.jsx
│   │   ├── FavoriteCartComponent.jsx
│   │   ├── FooterComponent.jsx
│   │   ├── HeaderComponent.jsx
│   │   ├── HeartComponent.jsx
│   │   ├── LogoutButton.jsx
│   │   ├── Pagination.jsx
│   │   ├── ProductsComponent.jsx
│   │   ├── SearchComponent.jsx
│   │   └── UpdateUserForm.jsx
│   ├── contexts/
│   │   ├── AdminsBooksContext.jsx
│   │   ├── AuthContext.jsx
│   │   ├── BooksContext.jsx
│   │   ├── FavoritesContext.jsx
│   │   └── UsersContext.jsx
│   ├── docs/
│   ├── pages/
│   │   ├── AdminBooksPage.jsx
│   │   ├── AdminPage.jsx
│   │   ├── AdminUsersPage.jsx
│   │   ├── DashboardPage.jsx
│   │   ├── FavoritesPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   └── RegisterPage.jsx
│   ├── services/
│   │   ├── booksService.jsx
│   │   └── userService.jsx
│   ├── styles/
│   │   ├── AddBookFormStyle.css
│   │   ├── AdminBookPageStyle.css
│   │   ├── AdminPageStyle.css
│   │   ├── AdminUserPageStyle.css
│   │   ├── BackButtonStyle.css
│   │   ├── DashboardStyle.css
│   │   ├── DashboardUserDetailsStyle.css
│   │   ├── DetailedProductComponentStyle.css
│   │   ├── EditBookFormStyle.css
│   │   ├── EditUserFormStyle.css
│   │   ├── EmptyCartComponentStyle.css
│   │   ├── FavoritesCartComponentStyle.css
│   │   ├── FavoritesPageStyle.css
│   │   ├── FooterStyle.css
│   │   ├── HeaderStyle.css
│   │   ├── HomePageStyle.css
│   │   ├── LoginPage.css
│   │   ├── LogoutButton.css
│   │   ├── ProductComponentStyle.css
│   │   ├── SearchComponentStyle.css
│   │   └── UpdatesUserFormStyle.css
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
│   └── index.html
├── .gitignore
├── eslint.config.js
├── package.json
├── package-lock.json
├── vite.config.js
├── LICENSE
└── README.md
```

---
