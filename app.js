const express = require('express');
const app = express();
const port = 3000;

// Conjunto de Dados de Usuarios
const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
];

// Ruta para la página principal
app.get('/', (req, res) => {
  let specialties = [...new Set(usersData.map(user => user.specialty))]; // para nao duplicar as palavras
  let links = specialties.map(specialty => `<a href="/${specialty}">${specialty}</a>`).join(' | '); // crianado links en das especilidades 
  res.send(`<h1>Bienvenido</h1><p>Navega a las especialidades: ${links}</p>`); // respondendo com um html que é oq vai aprecer na pagina 
});

// Función para filtrar usuarios por especialidad
function getUsersBySpecialty(specialty) {
  return usersData.filter(user => user.specialty === specialty);
}

// Rutas dinámicas para cada especialidad
app.get('/:specialty', (req, res) => {
  const specialty = req.params.specialty;
  const users = getUsersBySpecialty(specialty);
  
  if (users.length > 0) {
    const userList = users.map(user => `<li>${user.name}, ${user.age} años</li>`).join('');
    res.send(`<h1>${specialty}</h1><p>Hay ${users.length} personas en esta especialidad</p><ul>${userList}</ul>`);
  } else {
    res.status(404).send('<h1>Especialidad no encontrada</h1>');
  }
});

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).send('<h1>Página no encontrada</h1>');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});