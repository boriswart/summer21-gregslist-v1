import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HouseService.js"

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
                        <b>${house.sqFootage} ${house.neighborhood ? "in a nice neighborhood" : ""}</b>
                        </p>
                         <p>
                        <b>Asking price: ${house.askPrice}</b>
                        </p>
                    </div >
                </div >
            </div> `
        })
        document.getElementById('listings').innerHTML = template
        template = `<button  class="fab" onclick="app.housesController.toggleForm()">+</button>`
        document.getElementById('fab').innerHTML = template
    }

    addHouse(event) {
        event.preventDefault()
        console.log(event)
        let form = event.target
        let formData = {
            sqFootage: form.sqFootage.value,
            color: form.color.value,
            img: form.img.value,
            neighborhood: form.neighborhood.value,
            HOA: form.HOA.value,
            numBaths: form.numBaths.value,
            numBeds: form.numBeds.value,
            yearBuilt: form.yearBuilt.value,
            distFromSchool: form.distFromSchool.value,
            askPrice: form.askPrice.value
        }
        console.log("data from Form: ", formData)
        housesService.addHouse(formData)
        //form.reset()
        this.toggleForm()
    }

    toggleForm() {
        document.getElementById('house-form').classList.toggle('d-none')
    }

}