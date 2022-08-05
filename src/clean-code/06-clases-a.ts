(() => {

    // No aplicando el principio de responsabilidad única

    type Gender = 'M'|'F';

    // class Person { // Forma larga de clases en TS
    //     public name: string;
    //     public gender: Gender;
    //     public birthdate: Date;
    //     constructor(name: string, gender: Gender, birthdate: Date){
    //         this.name =  name;
    //         this.gender = gender;
    //         this.birthdate = birthdate;
    //     }
    // }

    class Person {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date,
        ){}
    }

    class User extends Person {

        public lastAccess: Date;

        constructor(
            public email: string,
            public rol: string,
            // private lastAccess: Date,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }


    // const newPerson = new Person('Jose', 'M', new Date(1985-10-21));
    // console.log({newPerson});

    class UserSettings extends User {
        constructor(
            public workingDirectory : string,
            public lastOpenFolder   : string,
            email                   : string,
            rol                     : string,
            name                    : string,
            gender                  : Gender,
            birthdate               : Date,
        ){
            super(email, rol, name, gender, birthdate);
        }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'jose@email.com',
        'Admin',
        'Jose',
        'M',
        new Date('1985-10-21')
    );

    console.log({userSettings});

})();