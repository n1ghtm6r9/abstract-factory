import Travel from './app/factories/Travel';
import AmericanTravel from './app/factories/AmericanTravel';
import EuropeanTravel from './app/factories/EuropeanTravel';
import AsianTravel from './app/factories/AsianTravel';

let travel: Travel;

travel = new AmericanTravel();
travel.drive();
travel.fly();
travel.swim();


travel = new EuropeanTravel();
travel.drive();
travel.fly();
travel.swim();


travel = new AsianTravel();
travel.drive();
travel.fly();
travel.swim();