import { ProxyState } from "../AppState.js";
//import { caesService }

export class HousesController {
    constructor() {
        ProxyState.on('houses', this.drawHouses)
        this.drawHouses()
    }
    drawHouses() {
        let template = ''
        ProxyState.houses.forEach(house => {
            template += /*html*/`
            <div class="col-lg-4 listing my-3">
                <div class="card">
                    <div>
                        <img src="${house.img}" height="200" />
                    </div>
                    <div class="card-body">
                        <p>
                        <b>${house.sFootage} ${house.inNeighborhood ? "in a nice neighborhood" : ""}</b>
                        </p>
                         <p>
                        <b>Asking price: ${house.askPrice}</b>
                        </p>
                    </div >
                </div >
            </div> `
        })
        document.getElementById('listings').innerHTML = template
    }

    addHouse(formData) {
        console.log("data from Form: ", formData)
    }

    toggleForm() {
        document.getElementById('house-form').classList.toggle('d-none')
    }

}