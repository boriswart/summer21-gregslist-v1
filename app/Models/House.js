export class House {
    constructor(
        sqFootage,
        inNeighborhood,
        yearBuilt,
        color,
        numBaths,
        numBRooms,
        HOA,
        distFromSchool,
        askPrice,
        img
    ) {
        this.sFootage = sqFootage;
        this.inNeighborhood = inNeighborhood;
        this.yearBuilt = yearBuilt;
        this.color = color;
        this.numBaths = numBaths;
        this.numBRooms = numBRooms;
        this.HOA = HOA;
        this.disFromSchool = distFromSchool;
        this.askPrice = askPrice;
        this.img = img;
    }
}