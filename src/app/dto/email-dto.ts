export class EmailDTO {
    constructor(
        public asunto: String = '',
        public cuerpo: String = '',
        public destinatario: String = ''
    ){}
}
