import ICorreio from "./ICorreio";

export  default class Correios implements ICorreio{
   sendCorreios(): void {
      console.log("enviando pagote via correio.");
   }
   receiveCorreios(): void {
      console.log("recebendo pagote via correio.");
   }
}