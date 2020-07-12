export type TransportType = 'car' | 'plane' | 'ship';

export interface ITransport {

    type: TransportType;
    brand: string;
    go();

}