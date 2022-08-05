(() => {

    // Aplicando el principio de responsabilidad única
    // Priorizar la composicion frente a la herencia

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
        email: string;
        rol: string;
    }

    class User {
        public email      : string;
        public lastAccess : Date;
        public rol        : string;
        constructor({ email, rol }: UserProps) {
            this.email = email;
            this.rol = rol;
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    interface SettingsProps {
        lastOpenFolder: string;
        workingDirectory: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor({ 
                workingDirectory,
                lastOpenFolder
            }: SettingsProps) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }


    interface UserSettingsProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        name: string;
        lastOpenFolder: string;
        rol: string;
        workingDirectory: string;
    }

    class UserSettings {
        public person   : Person;
        public user     : User;
        public settings : Settings;

        constructor({
            name, gender, birthdate,
            email, rol,
            lastOpenFolder, workingDirectory,
        }: UserSettingsProps ){
            this.person = new Person({name, gender, birthdate});
            this.user = new User({email, rol});
            this.settings = new Settings({lastOpenFolder, workingDirectory});

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