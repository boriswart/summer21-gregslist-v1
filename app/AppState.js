import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /** @type {Car[]} */
  cars = [
    new Car("Honda", "Accord", 10000, "rusty", 500, "//placehold.it/500x500")
  ]
  /** @type {House[]} */
  houses = [new House(2450, true, 2000, "lt brown", 3, 5, true, 0.5, 480000, "//Placehold.it/500x500")
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
