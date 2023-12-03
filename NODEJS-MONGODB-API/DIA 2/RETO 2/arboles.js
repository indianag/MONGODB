const mongoose =require('mongoose');


const TeacherSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    groups: [String]
})

const SubjectSchema = new mongoose.Schema({
    title: String,
    teachers: [TeacherSchema]
})

const MarkSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    subject: SubjectSchema
})

const StudentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    marks: [MarkSchema]
})

const Teacher = mongoose.model('Teacher', TeacherSchema);
const Subject = mongoose.model('Subject', SubjectSchema);
const Mark = mongoose.model('Mark', MarkSchema);
const Student = mongoose.model('Student', StudentSchema);

module.exports = {Teacher, Subject, Mark, Student};

