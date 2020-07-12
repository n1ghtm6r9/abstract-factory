import { ITransport } from "../models";

export default abstract class Travel {

    abstract createCar(): ITransport;
    abstract createPlane(): ITransport;
    abstract createShip(): ITransport;

    protected logTransport(transport: ITransport) {

        console.log(`Transport: Brand - ${transport.brand}, type - ${transport.type}`);

    }

    protected go(createFunction: () => ITransport) {

        const transport = createFunction();

        this.logTransport(transport);
        transport.go();

    }

    public drive() {
        this.go(this.createCar);
    }

    public fly() {
        this.go(this.createPlane);
    }

    public swim() {
        this.go(this.createShip);
    }

}