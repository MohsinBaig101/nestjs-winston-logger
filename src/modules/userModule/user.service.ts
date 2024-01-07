import { Model } from 'mongoose';
import { Inject, Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../models';
import { Logger } from '../../decorators/winston';
// import { CustomDecorator  } from '@nestjs/common';

// import * as winston from 'winston';

@Injectable()
export class UserService {

    constructor(
        @InjectModel('users') private userModel: Model<User>,
        @Logger() private logger: any
    ) { }

    public async getUsers() {
        const logger = this.logger.child({
            serviceName: 'UserService'
        })
        logger.info('hi');
        return await this.userModel.find();
    }

    public async inserUser(body: any) {
        // this.loggerD.info('hi');
        await this.userModel.insertMany({
            firstName: body.firstName,
            lastName: body.lastName,
            age: body.age,
            dob: body.dob,
            sex: body.sex,
            educations: body.educations
        });
        return 'Saved';
    }

}