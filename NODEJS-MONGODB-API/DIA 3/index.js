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

async function insertData() {
    try {
      await Teacher.insertMany(teachersData);
      await Mark.insertMany(marksData);
      console.log('Datos insertados correctamente.');
    } catch (error) {
      console.error(error);
    }
}

insertData();




app.listen(port, () => console.log('server listning on porto', port));                   