# Aplicación de Gestión de Libros

## Tabla de Contenidos
- [Aplicación de Gestión de Libros](#aplicación-de-gestión-de-libros)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Introducción](#introducción)
  - [Características](#características)
    - [Autenticación de Usuarios](#autenticación-de-usuarios)
    - [Gestión de Libros](#gestión-de-libros)
    - [Favoritos](#favoritos)
    - [Panel de Administración](#panel-de-administración)
  - [Usuarios por Defecto (para pruebas)](#usuarios-por-defecto-para-pruebas)
    - [Usuario Administrador](#usuario-administrador)
    - [Usuario Regular](#usuario-regular)
    - [Características Adicionales](#características-adicionales)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
    - [Frontend](#frontend)
    - [Herramientas](#herramientas)
  - [Primeros Pasos](#primeros-pasos)
  - [Uso](#uso)
    - [Funcionalidades Clave:](#funcionalidades-clave)
      - [Usuarios Regulares:](#usuarios-regulares)
      - [Administradores:](#administradores)
  - [Contribuciones](#contribuciones)
  - [Licencia](#licencia)
  - [Autores](#autores)
  - [Más información:](#más-información)
    - [Estructura del Directorio del Proyecto:](#estructura-del-directorio-del-proyecto)

## Introducción
Este proyecto es una plataforma para la gestión de libros y usuarios, construida con Vite y React. Permite a los usuarios explorar libros, gestionar favoritos, realizar tareas administrativas (para administradores) y llevar a cabo operaciones CRUD tanto para libros como para perfiles de usuario. La aplicación usa React Context para la gestión global del estado y servicios debido a que interactúa con un conjunto de datos simulados.

## Características

### Autenticación de Usuarios
- Inicio de sesión y registro con roles (administrador/usuario).

### Gestión de Libros
- Navegar libros disponibles.
- Añadir, editar o eliminar libros (solo administradores).
- Buscar libros por título y géneros literarios.
- Catálogo con 60 libros simulados.  

### Favoritos
- Guardar libros en una lista de favoritos.

### Panel de Administración
- Gestionar usuarios (activar/desactivar, editar roles).
- Supervisar todos los libros en la plataforma.

## Usuarios por Defecto (para pruebas)

### Usuario Administrador
- **Nombre de usuario**: `admin`  
- **Contraseña**: `admin`

### Usuario Regular
- **Nombre de usuario**: `bibliovida`  
- **Contraseña**: `libros123`

> **Nota de Seguridad**: 🔒 *Cambia estas credenciales por defecto antes de desplegar en entornos de producción.*

### Características Adicionales
- **Diseño Responsivo**: Compatible con múltiples dispositivos.
- **Paginación**: Navega por los resultados sin inconvenientes.
- **Persistencia de datos** en `localStorage`.  

## Tecnologías Utilizadas

### Frontend
- React 
- Vite
- JavaScript (JSX)
- CSS (Estilos scoped por componente)
- React Router (Navegación)
- Context API (Gestión de estado)
- Node.js
- HTML

### Herramientas
- ESLint (Linting)
- Git (Control de versiones)

## Primeros Pasos

Clona el repositorio:
```sh
git clone http://www.github.com/Guada-lupes/Proyecto-Final--Grupo-1
