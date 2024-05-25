export class BuscarNegocioDTO {
    constructor(
        public busqueda: String = '',
        public tipoNegocio: String = '',
        public idCliente: String = ''
    ){}
}
