export class HistorialRevisionDTO {
    constructor(
        public descripcion: String = '',
        public estadoNegocio: String = '',
        public codigoModerador: String = '',
        public codigoNegocio: String = ''
    ){}
}
