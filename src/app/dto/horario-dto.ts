export class HorarioDTO {
    constructor(
        public horaFin: Date = new Date,
        public horaInicio: Date = new Date,
        public dia: String = ''
    ){}
}
