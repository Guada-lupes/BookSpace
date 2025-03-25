// Data de usuarios Mockeados

// Array de usuarios mockeados con propiedades estáticas de following y followers:

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
    role: "user",
    following: 12,
    followers: 8,
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
    role: "user",
    following: 7,
    followers: 15,
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
    role: "user",
    following: 9,
    followers: 11,
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
    role: "user",
    following: 5,
    followers: 12,
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
    role: "user",
    following: 8,
    followers: 10,
  },
  {
    id: 6,
    username: "wordWizard",
    password: "lingo456",
    profilePicture: "https://randomuser.me/api/portraits/men/6.jpg",
    fullName: "Carlos Pinto",
    about: "I love playing with words.",
    age: 31,
    country: "Spain",
    email: "carlos.pinto@example.com",
    favorites: [],
    role: "user",
    following: 5,
    followers: 9,
  },
  {
    id: 7,
    username: "novelLover",
    password: "story789",
    profilePicture: "https://randomuser.me/api/portraits/women/7.jpg",
    fullName: "Ana Ruiz",
    about: "Always in search of new novels.",
    age: 28,
    country: "Mexico",
    email: "ana.ruiz@example.com",
    favorites: [],
    role: "user",
    following: 14,
    followers: 7,
  },
  {
    id: 8,
    username: "epicTales",
    password: "saga012",
    profilePicture: "https://randomuser.me/api/portraits/men/8.jpg",
    fullName: "Jorge Alvarez",
    about: "I enjoy epic tales and adventures.",
    age: 34,
    country: "Colombia",
    email: "jorge.alvarez@example.com",
    favorites: [],
    role: "user",
    following: 6,
    followers: 13,
  },
  {
    id: 9,
    username: "mythicMuse",
    password: "legend345",
    profilePicture: "https://randomuser.me/api/portraits/women/9.jpg",
    fullName: "Carolina Mendez",
    about: "Inspired by ancient myths and legends.",
    age: 26,
    country: "Argentina",
    email: "carolina.mendez@example.com",
    favorites: [],
    role: "user",
    following: 10,
    followers: 12,
  },
  {
    id: 10,
    username: "pageTurner",
    password: "readit678",
    profilePicture: "https://randomuser.me/api/portraits/men/10.jpg",
    fullName: "Pedro Garcia",
    about: "Never miss a good page-turner.",
    age: 33,
    country: "Peru",
    email: "pedro.garcia@example.com",
    favorites: [],
    role: "user",
    following: 7,
    followers: 8,
  },
  // Usuario administrador
  {
    id: 11,
    username: "admin",
    password: "admin",
    profilePicture: "https://randomuser.me/api/portraits/lego/1.jpg",
    fullName: "Administrador del Sistema",
    about: "Soy el administrador.",
    age: 30,
    country: "Spain",
    email: "admin@example.com",
    favorites: [],
    role: "admin",
    following: 0,
    followers: 0,
  },
];

/* Función para obtener todos los usuarios.
   Se retorna una copia del array para evitar mutaciones externas.
*/
export const getUsers = () => {
  return [...users];
};

/* Función para buscar un usuario por su nombre de usuario. */
export const findUserByUsername = (username) => {
  return users.find((user) => user.username === username);
};

/* Función para validar las credenciales del usuario (username y password). */
export const checkUserCredentials = (username, password) => {
  return users.find(
    (user) => user.username === username && user.password === password
  );
};

/* Función para actualizar la información de un usuario.
   Se actualiza el usuario con 'id' recibido utilizando los campos presentes en el objeto 'updateData'.
   Retorna el usuario actualizado.
*/
export const updateUser = (id, updateData) => {
  users = users.map((user) =>
    user.id === id ? { ...user, ...updateData } : user
  );
  return users.find((user) => user.id === id);
};

/* Función para registrar un nuevo usuario */
export const registerUser = (newUserData) => {
  newUserData.id = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
  users.push({
    ...newUserData,
    favorites: [],
    role: "user",
    following: 0,
    followers: 0,
  });
  return { success: true, user: newUserData };
};

/* Función para obtener relación de seguimiento (usando los valores estáticos) */
export const getUserRelations = (userId) => {
  const user = users.find((u) => u.id === userId);
  if (!user) return { followingCount: 0, followersCount: 0 };
  return { followingCount: user.following, followersCount: user.followers };
};

export default users;
