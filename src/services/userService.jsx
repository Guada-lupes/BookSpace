// Data de usuarios Mockeados

let users = [
  {
    id: 1,
    username: "bibliovida",
    password: "libros123",
    profilePicture: "https://randomuser.me/api/portraits/women/1.jpg",
    fullName: "Maria Lopez",
    about: "I am passionate about reading and I love classic books.",
    age: 30,
    country: "Spain",
    email: "maria.lopez@example.com",
    favorites: [],
  },
  {
    id: 2,
    username: "fantasyKing",
    password: "fantasyWorld123",
    profilePicture: "https://randomuser.me/api/portraits/men/2.jpg",
    fullName: "Carlos Hernandez",
    about: "Passionate about fantasy and science fiction literature.",
    age: 35,
    country: "Mexico",
    email: "carlos.hernandez@example.com",
    favorites: [],
  },
  {
    id: 3,
    username: "poetita",
    password: "verses123",
    profilePicture: "https://randomuser.me/api/portraits/women/3.jpg",
    fullName: "Lucia Martinez",
    about: "Lover of poetry and short stories.",
    age: 27,
    country: "Argentina",
    email: "lucia.martinez@example.com",
    favorites: [],
  },
  {
    id: 4,
    username: "misterioTotal",
    password: "suspense456",
    profilePicture: "https://randomuser.me/api/portraits/men/4.jpg",
    fullName: "Diego Sanchez",
    about: "Fan of thrillers and mystery novels.",
    age: 32,
    country: "Colombia",
    email: "diego.sanchez@example.com",
    favorites: [],
  },
  {
    id: 5,
    username: "bookExplorer",
    password: "history789",
    profilePicture: "https://randomuser.me/api/portraits/women/5.jpg",
    fullName: "Elena Garcia",
    about: "Explorer of literary genres, always searching for new stories.",
    age: 29,
    country: "Peru",
    email: "elena.garcia@example.com",
    favorites: [],
  },
];

/* 
  Función para obtener todos los usuarios.
  Se retorna una copia del array para evitar mutaciones externas.
*/
export const getUsers = () => {
  return [...users];
};

/* 
  Función para buscar un usuario por su nombre de usuario.
  Útil para verificar si el usuario existe antes de realizar un proceso de autenticación.
*/
export const findUserByUsername = (username) => {
  return users.find((user) => user.username === username);
};

/* 
  Función para validar las credenciales del usuario (username y password).
  Retorna el usuario si la verificación es correcta, de lo contrario undefined.
*/
export const checkUserCredentials = (username, password) => {
  return users.find(
    (user) => user.username === username && user.password === password
  );
};

/* 
  Función para actualizar la información de un usuario.
  Se actualiza el usuario con 'id' recibido utilizando los campos presentes en el objeto 'updateData'.
  Retorna el usuario actualizado.
*/
export const updateUser = (id, updateData) => {
  users = users.map((user) =>
    user.id === id ? { ...user, ...updateData } : user
  );
  return users.find((user) => user.id === id);
};
