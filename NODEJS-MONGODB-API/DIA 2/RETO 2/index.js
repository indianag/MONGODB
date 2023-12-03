const express = require('express');
const mongoose = require('mongoose');
const { Teacher, Subject, Mark, Student } = require('./arboles');


const app = express();
const port = process.env.PORT || 3000;

// mongodb connection
mongoose.connect('mongodb+srv://IndianaG:oddiDavid@atlascluster.gjwvwex.mongodb.net/codenotch',
                   {useNewUrlParser: true, useUnifiedTopology: true});

// Crear instancias de modelos y documentos
const teacher1 = new Teacher({
    firstName: 'John',
    lastName: 'Doe',
    groups: ['A', 'B']
  });
  
const teacher2 = new Teacher({
    firstName: 'Jane',
    lastName: 'Smith',
    groups: ['C', 'D']
});
  
const teacher3 = new Teacher({
    firstName: 'Ana',
    lastName: 'Perez',
    groups: ['A', 'B']
  });
  
const teacher4 = new Teacher({
    firstName: 'Deyna',
    lastName: 'Catellano',
    groups: ['C', 'D']
});

const subject1 = new Subject({
    title: 'Math',
    teachers: [teacher1, teacher4],
  });
  
const subject2 = new Subject({
    title: 'History',
    teachers: [teacher2, teacher3],
  });

  const subject3 = new Subject({
    title: 'English',
    teachers: [teacher3, teacher1],
  });
  
const subject4 = new Subject({
    title: 'Science',
    teachers: [teacher4, teacher2],
  });

const mark1 = new Mark({
    date: new Date('2023-01-01'),
    mark: 90,
    subject: subject1,
});

const mark2 = new Mark({
    date: new Date('2023-01-15'),
    mark: 85,
    subject: subject2,
});

const mark3 = new Mark({
    date: new Date('2023-01-01'),
    mark: 25,
    subject: subject3,
});

const mark4 = new Mark({
    date: new Date('2023-01-15'),
    mark: 50,
    subject: subject4,
});

const student1 = new Student({
    firstName: 'Alice',
    lastName: 'Johnson',
    marks: [mark1, mark4],
  });
  
const student2 = new Student({
    firstName: 'Bob',
    lastName: 'Smith',
    marks: [mark2, mark3],
});

const student3 = new Student({
    firstName: 'Carlos',
    lastName: 'Mejis',
    marks: [mark3, mark2],
});

const student4 = new Student({
    firstName: 'Camila',
    lastName: 'Canaval',
    marks: [mark4, mark1],
});


// async function insertDocuments() {
//     try {
//       await teacher1.save();
//       await teacher2.save();
//       await teacher3.save();
//       await teacher4.save();
//       await subject1.save();
//       await subject2.save();
//       await subject3.save();
//       await subject4.save();
//       await mark1.save();
//       await mark2.save();
//       await mark3.save();
//       await mark4.save();
//       await student1.save();
//       await student2.save();
//       await student3.save();
//       await student4.save();
//       console.log('Documentos insertados con éxito.');
//     } catch (error) {
//       console.error('Error al insertar documentos:', error);
//     } finally {
//       // Cerrar la conexión después de insertar documentos
//       mongoose.disconnect();
//     }
//   }
  
//   // Llamar a la función para insertar documentos
//   insertDocuments();


//consulta para mostrar las notas de un alumno por su nombre
// Student.findOne({ firstName: 'Camila' })
// .then(function(marks){
// console.log(marks)
// mongoose.disconnect();
// })
// .catch(function(){
//     console.log("error")
// })  


//consulta para mostrar las asignaturas de un alumno
Student.findOne({ firstName: 'Camila' })
.then(function(student){
    if(student){
        if (student.marks.length > 0) {
            const subjectTitles = student.marks[0].subject.title;
            console.log(subjectTitles);
          } else {
            console.log('El estudiante no tiene asignaturas registradas.');
          }
        } else {
          console.log('Estudiante no encontrado');
        }
    
        // Desconectar de la base de datos después de imprimir los títulos
        mongoose.disconnect();
      })
      .catch(function (error) {
        console.error('Error al buscar al estudiante:', error);
        mongoose.disconnect();
      });




app.listen(port, () => console.log('server listning on porto', port));