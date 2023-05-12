export class Kasutaja2 {
    public id: number;
    public username: string;
    public password: string;
    public firstname: string;
    public lastname: string;

    constructor(
        id: number,
        username: string,
        password: string,
        firstname: string,
        lastname: string
    ) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}