import { Department } from './dept';

export class SignUpInfo {
    name: string;
    username: string;
    email: string;
    role: string[];
    password: string;
    department: string;
 
    constructor(name: string, username: string, email: string, password: string, department: string) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = ['user'];
        this.department = department;
    }
}