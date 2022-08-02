(() => {

    // función para obtener información de una película por Id
    // function getAllMovies( movieId: string ) { // Mal
    //     console.log({ movieId });
    // }
    function getMovieById(movieId: string): void { // Bien
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    // function getAllMovieActors( id: string ) { // Mal
    //     console.log({ id });
    // }
    function getMovieCastById(id: string): void { // Bien
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    // function getUsuario( ActorId: string ) { // Mal
    //     console.log({ ActorId });
    // }
    function getActorBioById(id: string): void { // Bien
        console.log({ id });
    }

    // Crear una película
    // function movie(title: string, description: string, rating: number, cast: string[] ) { // Mal
    //     console.log({ title, description, rating, cast });
    // }
    interface Movie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    };

    function createMovie({ title, description, rating, cast }: Movie): void { // Bien
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    // function createActorIfActorNotExists(fullName: string, birthdate: Date): boolean { // Mal

    //     // tarea asincrona para verificar nombre
    //     // ..
    //     // ..
    //     if (fullName === 'fernando') return false;

    //     console.log('Crear actor');
    //     return true;

    // }
    function checkFullName(fullName: string) {
        console.log({fullName});
        return true;
    }
    function createActor(fullName: string, birthdate: Date): boolean { // Bien

        if (!checkFullName(fullName)) return false;

        console.log('Crear actor', birthdate);
        return true;

    }

})();