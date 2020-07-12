// types
import Travel from './Travel';
import { ITransport } from '../models';
// models
import FordCar from '../models/Cars/FordCar';
import BoeingPlane from '../models/Planes/BoeingPlane';
import ComfortShip from '../models/Ships/ComfortShip';

export default class AmericanTravel extends Travel {

    createCar(): ITransport {
        return new FordCar();
    }

    createPlane(): ITransport {
        return new BoeingPlane();
    }

    createShip(): ITransport {
        return new ComfortShip();
    }

}