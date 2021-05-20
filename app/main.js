import { CarsController } from "./Controllers/CarsController.js"
import { HousesController } from "./Controllers/HousesController.js"
import { GuitarsController } from "./Controllers/GuitarsController.js"

class App {
  constructor() {
    // this.carsController = new CarsController()
    //}

    this.carsController = new CarsController()
    this.housesController = new HousesController()
    this.guitarsController = new GuitarsController()

  }
}

window["app"] = new App();

