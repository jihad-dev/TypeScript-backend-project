import { Schema, model, connect } from 'mongoose';


export type Guardian = {
    fatherName: string;
    fatherOccupation: string;
    motherName: string;
    motherOccupation: string;
}

export type UserName = {
    firstName: string;
    middleName: string;
    lastName: string;

}


export type Student = {
    id: string;
    name: UserName,
    gender: "male" | "female";
    dateOfBirth: string;
    contactNo: string;
    guardian: Guardian;
    email: string;
    avatar?: string;
    bloodGroup?: "A+" | "B+" | "AB+" | "A-";
    isActive: "Active" | "Disabled"
}



// 2. Create a Schema corresponding to the document interface.


