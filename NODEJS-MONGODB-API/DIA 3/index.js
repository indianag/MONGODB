const express = require('express');
const mongoose = require('mongoose');
const { Teacher, Mark } = require('./Agregaciones');


const app = express();
const port = process.env.PORT || 3000;

// mongodb connection
mongoose.connect('mongodb+srv://IndianaG:oddiDavid@atlascluster.gjwvwex.mongodb.net/codenotch',
                   {useNewUrlParser: true, useUnifiedTopology: true});


const teachersData = [
    { teacher_first_name: 'Profesor1', teacher_last_name: 'Apellido1' },
    { teacher_first_name: 'Profesor2', teacher_last_name: 'Apellido2' },
  ];
  
const marksData = [
{
    date: '2023-01-01',
    mark: 90,
    student_first_name: 'Estudiante1',
    student_last_name: 'Apellido1',
    group_name: 'Grupo1',
    subject_name: 'Asignatura1',
    teachers: teachersData[0],
},
{
    date: '2023-09-05',
    mark: 85,
    student_first_name: 'Estudiante2',
    student_last_name: 'Apellido2',
    group_name: 'Grupo1',
    subject_name: 'Asignatura1',
    teachers: teachersData[1],
},
{
    date: '2022-10-01',
    mark: 75,
    student_first_name: 'Estudiante3',
    student_last_name: 'Apellido3',
    group_name: 'Grupo1',
    subject_name: 'Asignatura1',
    teachers: teachersData[0],
},
{
    date: '2015-12-18',
    mark: 65,
    student_first_name: 'Estudiante4',
    student_last_name: 'Apellido4',
    group_name: 'Grupo1',
    subject_name: 'Asignatura1',
    teachers: teachersData[1],
},
{
    date: '2018-11-21',
    mark: 70,
    student_first_name: 'Estudiante5',
    student_last_name: 'Apellido5',
    group_name: 'Grupo1',
    subject_name: 'Asignatura1',
    teachers: teachersData[0],
},
{
    date: '2015-12-18',
    mark: 92,
    student_first_name: 'Estudiante6',
    student_last_name: 'Apellido6',
    group_name: 'Grupo2',
    subject_name: 'Asignatura2',
    teachers: teachersData[1],
},
{
    date: '2021-06-19',
    mark: 88,
    student_first_name: 'Estudiante7',
    student_last_name: 'Apellido7',
    group_name: 'Grupo2',
    subject_name: 'Asignatura2',
    teachers: teachersData[0],
},
{
    date: '2022-05-13',
    mark: 69,
    student_first_name: 'Estudiante8',
    student_last_name: 'Apellido8',
    group_name: 'Grupo2',
    subject_name: 'Asignatura2',
    teachers: teachersData[1],
},
{
    date: '2023-04-02',
    mark: 72,
    student_first_name: 'Estudiante9',
    student_last_name: 'Apellido9',
    group_name: 'Grupo2',
    subject_name: 'Asignatura2',
    teachers: teachersData[0],
},
{
    date: '2021-07-22',
    mark: 83,
    student_first_name: 'Estudiante10',
    student_last_name: 'Apellido10',
    group_name: 'Grupo2',
    subject_name: 'Asignatura2',
    teachers: teachersData[1],
},
];

// async function insertData() {
//     try {
//       await Teacher.insertMany(teachersData);
//       await Mark.insertMany(marksData);
//       console.log('Datos insertados correctamente.');
//     } catch (error) {
//       console.error(error);
//     }
// }

// insertData();



// //Calcular la nota media de los alumnos de una asignatura concreta.
// Mark
// .aggregate([{$group: {"_id": null, "Nota Media": {"$avg": "$mark"}}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// });

// //Calcular el número total de alumnos que hay en el bootcamp incluyendo repetidos.
// Mark
// .aggregate([{$count: "Numero de Alumnos"}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// });

// //Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos.
// Mark
// .aggregate([{
//     $project: 
//     {
//         _id: 0,
//         student_first_name: 1,
//         student_last_name: 1, 
//     },
// },
// ])
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });


// //Listar el nombre y los apellidos de todos los profesores incluyendo repetidos.
// Teacher
// .aggregate([{
//     $project: 
//     {
//         _id: 0,
//         teacher_first_name: 1,
//         teacher_last_name: 1, 
//     },
// },
// ])
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });

//Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto.
// Mark
// .aggregate([{$group: {_id: '$group_name', totalStudents: { $sum: 1 }, }, },
//     {
//       $sort:
//       {
//         _id: -1, // Ordena en orden inverso alfabético por group_name
//       },
//     },
// ])
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });


// //Obtén el top 5 de los nombres de las asignaturas cuya nota media sea mayor que 5.
// Mark
// .aggregate([
// {
//     $group: {
//     _id: '$subject_name', // Agrupo por subject_name
//     notaMedia: { $avg: '$mark' }, // Calculo la nota media para cada asignatura
//     },
// },
// {
//     $match: {
//     notaMedia: { $gt: 5 }, // Filtro las asignaturas con nota media mayor que 5
//     },
// },
// ])
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });


//Calcular el numero de profesores que hay por cada asignatura incluyendo repetidos.
// Mark
// .aggregate([
// {
//     $group: {
//     _id: '$subject_name',
//     totalTeachers: { $sum: 1 },
//     },
// },
// ])
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });


// //Obtén el nombre, apellido y la nota de los alumnos que tengan una nota mayor de 8 o la nota
// //tenga fecha del año pasado o anterior.
// Mark
// .aggregate([
// {
//     $match: {
//     $or: [
//         { mark: { $gt: 8 } }, // Nota mayor de 8
//         { date: { $lt: new Date() } } // Nota con fecha del año pasado o anterior
//     ]
//     },
// },
// {
//     $project: {
//     _id: 0,
//     student_first_name: 1, // Incluir el campo student_first_name
//     student_last_name: 1, // Incluir el campo student_last_name
//     mark: 1, // Incluir el campo mark
//     },
// },
// ])
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });


// //Obtén la media de las notas que se han dado en el último año por asignatura.
// Mark
// .aggregate([
// {
//     $match: {
//     date: { $gte: new Date('2022-12-05'), $lt: new Date('2023-12-05') }, // Filtro las notas del último año
//     },
// },
// {
//     $group: {
//     _id: '$subject_name', // Agrupo por asignatura
//     notaMedia: { $avg: '$mark' }, // Calculo la media de las notas por asignatura
//     },
// },
// {
//     $project: {
//     _id: 0, 
//     subject_name: '$_id', // Renombro _id a subject_name
//     notaMedia: 1, // Incluir el campo averageMark
//     },
// },
// ])
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });



// //Obtén la media aritmética de las notas que se han dado en el último año por nombre de alumno.
// Mark
// .aggregate([
// {
//     $match: {
//     date: { $gte: new Date('2022-12-05'), $lt: new Date('2023-12-05') }, // Filtro notas del último año
//     },
// },
// {
//     $group: {
//     _id: { student_first_name: '$student_first_name'}, // Agrupo por nombre del alumno
//     notaMedia: { $avg: '$mark' }, // Calculo la media de las notas para cada alumno
//     },
// },
// {
//     $project: {
//     _id: 0,
//     student_first_name: '$_id.student_first_name', // mostrar el nombre del alumno 
//     notaMedia: 1, // mostrar nota media
//     },
// },
// ])
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });


// //Obtén los nombres de los alumnos y la cantidad total de asignaturas por alumno cuyo profesor
// //sea uno que elijáis.

// Mark
// .aggregate([
// {
//     $match: {
//     "teachers.teacher_first_name": "Profesor1", //nombre del profe que elija
//     },
// },
// {
//     $group: {
//     _id: {student_first_name: "$student_first_name"}, // Agrupo por nombre el alumno
//     totalSubjects: { $sum: 1 }, // Cuento la cantidad total de asignaturas por alumno
//     },
// },
// {
//     $project: {
//     _id: 0, 
//     student_first_name: "$_id.student_first_name", // Extraigo el nombre del alumno
//     totalSubjects: 1, // muestro el campo de las asignaturas por alumno
//     },
// },
// ])
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });















app.listen(port, () => console.log('server listning on porto', port));                   