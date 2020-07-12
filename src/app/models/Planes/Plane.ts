import { ITransport, TransportType } from '..';

export default abstract class Plane implements ITransport {

    abstract brand: string;

    public type: TransportType = 'plane';

    go() {
        console.log('flew');
    }

}