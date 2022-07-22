import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import ICorreio from "./Correios/ICorreio";
import Transportadora from "./Transportadora/Transportadora";

const pagamento:ICorreio = new TransportadoraAdapter(new Transportadora());
pagamento.sendCorreios();
pagamento.receiveCorreios();