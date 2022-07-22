import ITransportadora from "./ITransportadora";

export default class Transportadora implements ITransportadora{
    send(): void {
       console.log("Transportadora:envindo o pedido.");
    }
    receive(): void {
        console.log("Transportadora:recebendo o pedido.");
    }
}