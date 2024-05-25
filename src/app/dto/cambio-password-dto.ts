export class CambioPasswordDTO {
    constructor(
        public nuevaPassword: String = '',
        public id: String = '',
        public token: String = ''
    ){}
}
