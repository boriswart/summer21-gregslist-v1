import { ProxyState } from "../AppState.js";
import { Guitar } from "../Models/Guitar.js";

class GuitarsService {
    addGuitar(formData) {
        let newGuitar = new Guitar(formData.make, formData.model, formData.type, formData.price, formData.year, formData.img)
        // ProxyState.cars.unshift(newCar)
        // TODO research the spread ... operator
        ProxyState.guitars = [newGuitar, ...ProxyState.guitars]
    }
}

// NOTE singleton
export const guitarsService = new GuitarsService()