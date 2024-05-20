export class EnviarMensajeChatDTO {
    constructor(
    public codigoChat: string = '',
    public mensaje: string = '',
    public codigoRemitente = ''
    ){}
}
