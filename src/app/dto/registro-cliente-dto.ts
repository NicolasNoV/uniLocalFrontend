export class RegistroClienteDTO {
    constructor(
    public nickname: string = '',
    public nombre: string = '',
    public correoElectronico: string = '',
    public password: string = '',
    public ciudadResidencia: string = '',
    public fotoPerfil: string = '',
    public confirmaPassword: string = ''
    ) { }
}
