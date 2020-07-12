import { ITransport, TransportType } from '..';

export default abstract class Ship implements ITransport {

    abstract brand: string;

    public type: TransportType = 'ship';

    go() {
        console.log('sailed');
    }

}