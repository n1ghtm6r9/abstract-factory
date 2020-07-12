import { ITransport, TransportType } from '..'

export default abstract class Car implements ITransport {

    abstract brand: string;

    public type: TransportType = 'car';

    public go() {
        console.log('drive');
    }

}