export interface User {

    identificacion: string;
    nombre: string;
    correo: string;
    password: string;
    celular: number;
    id_perfiles_fk: string;
    id_tipo_documento_fk: string;

}