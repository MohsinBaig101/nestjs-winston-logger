import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
class Education {
    @Prop({ required: true })
    schoolName: string;

    @Prop()
    passYear: string;

    @Prop()
    grade: string;
}

@Schema()
export class User {
    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true })
    age: number;

    @Prop({ required: true })
    dob: string;

    @Prop({ required: true })
    sex: string;

    @Prop({ schema: Education })
    educations: Education[];
}



export const UserSchema = SchemaFactory.createForClass(User);
