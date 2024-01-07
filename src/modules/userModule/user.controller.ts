import { Controller, Get, Post, Req, Res } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    public async getUsers(@Req() req, @Res() res) {
        return res.json(await this.userService.getUsers());
    }

    @Post()
    public async insertUser(@Req() req, @Res() res) {
        return res.json(await this.userService.inserUser(req.body));
    }
}