const mongoose = require('mongoose');


const teacherSchema = new mongoose.Schema({
    teacher_first_name: String,
    teacher_last_name: String,
  });
  
  const markSchema = new mongoose.Schema({
    id: String,
    date: Date,
    mark: Number,
    student_first_name: String,
    student_last_name: String,
    group_name: String,
    subject_name: String,
    teachers: [teacherSchema],
  });
  
  
  const Teacher = mongoose.model('Teacher', teacherSchema);
  const Mark = mongoose.model('Mark', markSchema);

  module.exports = {Teacher, Mark};