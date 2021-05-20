import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

class HouseService {
    addHouse(fd) {
        let newHouse = new House(fd.sqFootage,
            fd.neighborhood,
            fd.yearBuilt,
            fd.color,
            fd.numBaths,
            fd.numBeds,
            fd.HOA,
            fd.distFromSchool,
            fd.askPrice,
            fd.img)
        // ex.:   houses = [new House(2450, true, 2000, "lt brown", 3, 5, true, 0.5, 480000, "assets/img/preaknesWay.png")
        ProxyState.houses = [newHouse, ...ProxyState.houses]
    }
}
export const housesService = new HouseService()