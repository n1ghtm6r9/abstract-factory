// types
import Travel from './Travel';
import { ITransport } from '../models';
// models
import NissanCar from '../models/Cars/NissanCar';
import TigerairPlane from '../models/Planes/TigerairPlane';
import LaosShip from '../models/Ships/LaosShip';

export default class EuropeanTravel extends Travel {

    createCar(): ITransport {
        return new NissanCar();
    }

    createPlane(): ITransport {
        return new TigerairPlane();
    }

    createShip(): ITransport {
        return new LaosShip();
    }

}