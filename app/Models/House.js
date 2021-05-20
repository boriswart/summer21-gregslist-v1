export class House {
    constructor(
        sqFootage,
        neighborhood,
        yearBuilt,
        color,
        numBaths,
        numBeds,
        HOA,
        distFromSchool,
        askPrice,
        img
    ) {
        this.sqFootage = sqFootage;
        this.neighborhood = neighborhood;
        this.yearBuilt = yearBuilt;
        this.color = color;
        this.numBaths = numBaths;
        this.numBeds = numBeds;
        this.HOA = HOA;
        this.distFromSchool = distFromSchool;
        this.askPrice = askPrice;
        this.img = img;
    }
}