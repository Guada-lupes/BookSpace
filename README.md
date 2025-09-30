Aplicación de Gestión de Libros
Tabla de Contenidos

Aplicación de Gestión de Libros

Tabla de Contenidos

Introducción

Características

Autenticación de Usuarios

Gestión de Libros

Favoritos

Panel de Administración

Usuarios por Defecto (para pruebas)

Usuario Administrador

Usuario Regular

Características Adicionales

Tecnologías Utilizadas

Frontend

Herramientas

Primeros Pasos

Uso

Funcionalidades Clave:

Usuarios Regulares:

Administradores:

Contribuciones

Licencia

Autores

Más información:

Estructura del Directorio del Proyecto:

Introducción

Este proyecto es una plataforma para la gestión de libros y usuarios, construida con Vite y React. Permite a los usuarios explorar libros, gestionar favoritos, realizar tareas administrativas (para administradores) y llevar a cabo operaciones CRUD tanto para libros como para perfiles de usuario. La aplicación usa React Context para la gestión global del estado y servicios debido a que interactúa con un conjunto de datos simulados.

Características
Autenticación de Usuarios

Inicio de sesión y registro con roles (administrador/usuario).

Gestión de Libros

Navegar libros disponibles.

Añadir, editar o eliminar libros (solo administradores).

Buscar libros por título y géneros literarios.

Catálogo con 60 libros simulados.

Favoritos

Guardar libros en una lista de favoritos.

Panel de Administración

Gestionar usuarios (activar/desactivar, editar roles).

Supervisar todos los libros en la plataforma.

Usuarios por Defecto (para pruebas)
Usuario Administrador

Nombre de usuario: admin

Contraseña: admin

Usuario Regular

Nombre de usuario: bibliovida

Contraseña: libros123

Nota de Seguridad: 🔒 Cambia estas credenciales por defecto antes de desplegar en entornos de producción.

Características Adicionales

Diseño Responsivo: Compatible con múltiples dispositivos.

Paginación: Navega por los resultados sin inconvenientes.

Persistencia de datos en localStorage.

Tecnologías Utilizadas
Frontend

React

Vite

JavaScript (JSX)

CSS (Estilos scoped por componente)

React Router (Navegación)

Context API (Gestión de estado)

Node.js

HTML

Herramientas

ESLint (Linting)

Git (Control de versiones)

Primeros Pasos

Clona el repositorio:

git clone http://www.github.com/Guada-lupes/Proyecto-Final--Grupo-1


Entra al directorio del proyecto:

cd Proyecto-Final--Grupo-1


Instala las dependencias:

npm install

Uso

Inicia el servidor de desarrollo:

npm run dev


Accede a la app en tu navegador: http://localhost:5173
.

Funcionalidades Clave:
Usuarios Regulares:

Iniciar sesión o registrarse (simulado).

Navegar libros, agregar a favoritos y gestionar perfiles.

Administradores:

Acceder al panel de administración desde el menú.

Gestionar libros y usuarios (editar, eliminar, agregar).

Búsqueda: Usa la barra de búsqueda para filtrar libros.

Paginación: Navega entre páginas de resultados.

Contribuciones

¡Se aceptan contribuciones! Para contribuir:

Haz un fork del repositorio.

Crea una rama para tu característica:

git checkout -b mi-nueva-caracteristica


Haz commits con mensajes descriptivos.

Envía un Pull Request explicando tus cambios.

Licencia

Este proyecto está bajo la Licencia MIT.
Para más detalles, consulta el archivo LICENSE
.

Autores

Guadalupe Marándola Ávila (https://github.com/Guada-lupes
)

Sara del Pozo González (https://github.com/Sppgg
)

Sara Martín Ferrara (https://github.com/SaraM901
)

Rebeca Mora González (https://github.com/Rebecatech
)

Más información:
Estructura del Directorio del Proyecto:
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

