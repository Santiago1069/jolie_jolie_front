export interface User {

    identificacion: string;
    nombre: string;
    correo: string;
    password: string;
    celular: number;
    fk_id_perfiles: number;
    fk_id_tipo_documento: number;

}