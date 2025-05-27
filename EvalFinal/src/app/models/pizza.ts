export class Pizza {
    constructor(
       public name: string,
       public image: string,
       public description: string,
       public ingredients: string[],
       public price: number,
       public rating: number,
    ) {
    }

}