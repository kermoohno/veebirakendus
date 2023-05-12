export class Kasutaja {
    constructor(
        public id: number,
        public username: string,
        public password: string,
        public firstname: string,
        public lastname: string,
    ) {}

    get id() {
        return this.id;
    }

    get username() {
        return this.username;
    }

    get password() {
        return this.password;
    }

    get firstname() {
        return this.firstname;
    }

    get lastname() {
        return this.lastname;
    }

    set id(newId: number) {
        this.id = newId;
    }

    set username(newUsername: string) {
        this.username = newUsername;
    }

    set password(newPassword: string) {
        this.password = newPassword;
    }

    set firstname(newFirstname: string) {
        this.firstname = newFirstname;
    }

    set lastname(newLastname: string) {
        this.lastname = newLastname;
    }
}
