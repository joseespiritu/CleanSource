(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person {
        public birthdate: Date;
        public gender: Gender;
        public name: string;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        name: string;
        rol: string;
    }

    class User extends Person {

        public email: string;
        public lastAccess: Date;
        public rol: string;

        constructor({ email, rol, name, gender, birthdate }: UserProps) {
            super({ name, gender, birthdate });
            this.email = email;
            this.rol = rol;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }


    // const newPerson = new Person('Jose', 'M', new Date(1985-10-21));
    // console.log({newPerson});

    interface UserSettingsProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        name: string;
        lastOpenFolder: string;
        rol: string;
        workingDirectory: string;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({ 
                workingDirectory,
                lastOpenFolder,
                email,
                rol,
                name,
                gender,
                birthdate 
            }: UserSettingsProps) {
            super({ email, rol, name, gender, birthdate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'jose@email.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Jose',
        rol: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({ userSettings });

})();