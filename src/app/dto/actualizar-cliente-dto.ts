export class ActualizarClienteDTO {
    constructor(
        public nombre: String = '',
        public correoElectronico: String = '',
        public ciudad: String = '',
        public fotoPerfil: String = '',
        public id: String = ''
    ){}
}
