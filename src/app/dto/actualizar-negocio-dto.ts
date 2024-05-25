import { HorarioDTO } from "./horario-dto";
import { Ubicacion } from "./ubicacion";

export class ActualizarNegocioDTO {
    constructor(
        public codigoNegocio: string = '',
        public ubicacion: Ubicacion = new Ubicacion(),
        public nombre: string = '',
        public descripcion: string = '',
        public horarios: HorarioDTO[] = [],
        public imagenes: string[] = [],
        public codigoCliente: string = '',
        public tipoNegocio: string = '',
        public telefonoes: string[] = []
    ){}
}
