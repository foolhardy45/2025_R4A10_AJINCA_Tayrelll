export class Voyage {
    id: number = 0;
    constructor(
        public destination: string,
        public description: string,
        public prix : number,
    ){
        this.id = this.id + 1;
    }
}