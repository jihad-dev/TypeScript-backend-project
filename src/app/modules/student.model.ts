import { Schema, model, connect } from 'mongoose';
import { Student, UserName } from './student/student.interface';

const userNameSchema = new Schema<UserName>({
    firstName: {
        type: String,
        required: true,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true,
    }
})

const studentSchema = new Schema<Student>({
    id: String,
    name: userNameSchema,
    gender: {
        type: String,
        enum: ['male', 'female']
    }
})