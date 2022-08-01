(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( file => file.flagged );

    // Mal nombrados
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor - Bien nombrados
    class User { };
    interface User { };


    /**
     * ! Ejemplos para casos de variables mal nombradas
     */
    // día de hoy - today
    // const ddmmyyyy = new Date(); // Mal
    const today = new Date(); // Bien
    
    // días transcurridos - elapsed time in days
    // const d: number = 23; // Mal
    const elapsedTimeInDays: number = 23; // Bien
    
    // número de archivos en un directorio - number of files in directory
    // const dir = 33; // Mal
    const numberOfFilesInDirectory = 33; // Bien
    
    // primer nombre - first name
    // const nombre = 'Fernando'; // Mal
    const firstName = 'Fernando'; // Bien
    
    // primer apellido - last name
    // const apellido = 'Herrera'; // Mal
    const lastName = 'Herrera'; // Bien

    // días desde la última modificación - days since modification
    // const dsm = 12; // Mal
    const daysSinceLastModification = 12; // Bien
    
    // cantidad máxima de clases por estudiante - max classes per student
    // const max = 6; // Mal
    const maxClassesPerStudent = 6; // Bien

})();