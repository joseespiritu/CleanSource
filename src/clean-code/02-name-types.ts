(() => {

    // arreglo de temperaturas celsius
    // const arrayOfNums = [33.6, 12.34]; // Mal
    const temperaturesCelsius = [33.6, 12.34]; // Bien

    // Dirección ip del servidor
    // const ip = '123.123.123.123'; // Mal
    const serverIp = '123.123.123.123'; // Bien

    // Listado de usuarios
    // const people = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }]; // Mal
    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }]; // Bien

    // Listado de emails de los usuarios
    // const emails = people.map( u => u.email ); // Mal
    const userEmails = users.map( user => user.email ); // Bien

    // Variables booleanas de un video juego
    // const jump = false; // Mal
    const canJump = false; // Bien
    // const run = true; // Mal
    const canRun = true; // Bien
    // const noTieneItems = true; // Mal
    const hasItems = true; // Bien
    // const loading = false; // Mal
    const isLoading = false; // Bien

    // Otros ejercicios
    // tiempo inicial
    // const start = new Date().getTime(); // Mal
    const startTime = new Date().getTime(); // Bien
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    // const end = new Date().getTime() - start; // Mal
    const endTime = new Date().getTime() - start; // Bien


    // Funciones
    // Obtiene los libros
    // function book() { // Mal
    //     throw new Error('Function not implemented.');
    // }
    function getBooks() { // Bien
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    // function BooksUrl( u: string) { // Mal
    //     throw new Error('Function not implemented.');
    // }
    function getBooksByURL( url: string) { // Bien
        throw new Error('Function not implemented.');
    }
    
    // obtiene el área de un cuadrado basado en sus lados
    // function areaCuadrado( s: number ) { // Mal
    //     throw new Error('Function not implemented.');
    // }
    function getSquareArea( side: number ) { // Bien
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    // function printJobIfJobIsActive() { // Mal
    //     throw new Error('Function not implemented.');
    // }
    function printJob() { // Bien
        throw new Error('Function not implemented.');
    }
    
})();