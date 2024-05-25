export class ComentarioDTO {
    constructor(
        public calificacion: number = 0,
        public codigoCliene: String = '',
        public mensaje: String = '',
        public respuesta: String = ''
    ){}
}
