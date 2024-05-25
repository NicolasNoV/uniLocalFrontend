export class CrearOfertaDTO {
    constructor(
        public descuento: number = 0,
        public codigoNegocio: String = '',
        public descripcion: String = '',
        public inicioOferta: Date = new Date,
        public finOferta: Date = new Date
    ){}
}
