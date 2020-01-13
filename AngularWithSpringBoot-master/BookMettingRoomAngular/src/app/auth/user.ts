import { Roles } from './roles';

export class User {

    constructor(
        public id: number,
        public username: string,
        public email: string,
        public roles: any,
        public department: string,
    ) { }
}