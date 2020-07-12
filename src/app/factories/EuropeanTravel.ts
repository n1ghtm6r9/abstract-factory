// types
import Travel from './Travel';
import { ITransport } from '../models';
// models
import VWCar from '../models/Cars/VWCar';
import AirbusPlane from '../models/Planes/AirbusPlane';
import HurtigrutenShip from '../models/Ships/HurtigrutenShip';

export default class EuropeanTravel extends Travel {

    createCar(): ITransport {
        return new VWCar();
    }

    createPlane(): ITransport {
        return new AirbusPlane();
    }

    createShip(): ITransport {
        return new HurtigrutenShip();
    }

}