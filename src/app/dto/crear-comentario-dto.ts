export class CrearComentarioDTO {
    constructor(
        public calificacion: number = 0,
        public codigoCliente: String = '',
        public codigoNegocio: String = '',
        public mensaje: String = ''
    ){}
}
