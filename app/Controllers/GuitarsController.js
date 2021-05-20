import { ProxyState } from "../AppState.js"
//import { GuitarsService } from "../Services/GuitarServices.js"

export class GuitarsController {
    constructor() {
        ProxyState.on('guitars', this.drawGuitars)
        this.drawGuitars()
    }
    drawGuitars() {
        let template = ""
        ProxyState.guitars.forEach(guitar => {
            template += /*html*/`
            <div class="col-lg-4 listing my-3">
                <div class="card">
                    <div>
                        <img src="${guitar.img}" height="200" />
                    </div>
                    <div class="card-body">
                        <p>
                        <b>${guitar.maker} ${guitar.model}</b>
                        </p>
                         <p>
                        <b>Price: ${guitar.cost}</b>
                        </p>
                    </div >
                </div >
            </div>  `
        })
        document.getElementById('listings').innerHTML = template
    }
    addGuitar(event) {
        event.preventDefault()
        console.log(event)
        let form = event.target
        let formData = {
            make: form.make.value,
            type: form.type.value,
            model: form.model.value,
            cost: form.cost.value,
            year: form.year.value,
            img: form.img.value
        }
        //Guitar("Fender", "Electric", "Stratocaster", 867.00, 1987, "//Placehold.it/600x600/"
        console.log("data from Form: ", formData)
        //guitarsService.addGuitar(formData)
        //form.reset()
        this.toggleForm()
    }

    toggleForm() {
        document.getElementById('guitar-form').classList.toggle('d-none')
    }

}