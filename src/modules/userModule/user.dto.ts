class Education {
    schoolName: string;
    passYear: string;
    grade: string;
}

export class UserDTO {
    firstName: string;
    lastName: string;
    age: number;
    dob: string;
    sex: string;
    educations: Education[]
}