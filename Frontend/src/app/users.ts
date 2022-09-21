export class Users{

    public id:number;
    public nombre:String;
    public apellido:String;
    public documento:String;
    public celular:String;
    public correo:String;
    public confirmarCorreo:String;
    public contraseña:String;
    public confirmarContraseña:String

    constructor(
        id:number, 
        nombre:string, 
        apellido:string,
        documento:string, 
        celular:string,
        correo:string,
        confirmarCorreo:string,
        contraseña:string,
        confirmarContraseña:string){
    
            this.id = id;
            this.nombre = nombre;
            this.apellido = apellido;
            this.documento = documento;
            this.celular = celular;
            this.correo = correo;
            this.confirmarCorreo = confirmarCorreo;
            this.contraseña = contraseña;
            this.confirmarContraseña = confirmarContraseña;
    }
}