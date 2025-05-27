import {Injectable} from "@angular/core";
import {Pizza} from "../models/pizza";

@Injectable({
    providedIn: 'root',
})
export class PizzaService{
    private pizzas : Pizza[] = [
        {
            name: 'margherita',
            image:
                'https://tse2.mm.bing.net/th?id=OIP.980GqsRwoZjg94qTuVdBZwHaJ_&pid=Api',
            description:
                'Une pizza classique avec sauce tomate, mozzarella et basilic frais.',
            ingredients: ['Tomate', 'Mozzarella', 'Basilic'],
            price: 8.99,
            rating: 4,
        },
        {
            name: 'pepperoni',
            image:
                'https://tse2.mm.bing.net/th?id=OIP.3Z4gvi7mZEpin_3jIwLHHgHaE7&pid=Api',
            description:
                'Une pizza savoureuse garnie de pepperoni épicé et de fromage fondu.',
            ingredients: ['Tomate', 'Mozzarella', 'Pepperoni'],
            price: 10.99,
            rating: 5,
        },
        {
            name: 'végétarienne',
            image:
                'https://tse2.mm.bing.net/th?id=OIP.eSDxUs3uRMdNtz74mfFzNAHaEU&pid=Api',
            description: 'Un mélange délicieux de légumes frais et de fromage.',
            ingredients: [
                'Tomate',
                'Mozzarella',
                'Poivrons',
                'Champignons',
                'Oignons',
            ],
            price: 9.99,
            rating: 3,
        },
        {
            name: 'quatre fromages',
            image:
                'https://tse2.mm.bing.net/th?id=OIP.eSDxUs3uRMdNtz74mfFzNAHaEU&pid=Api',
            description:
                'Une explosion de saveurs avec un mélange de quatre fromages.',
            ingredients: ['Mozzarella', 'Gorgonzola', 'Parmesan', 'Chèvre'],
            price: 11.99,
            rating: 5,
        },
    ];

    getAllPizzas(): Pizza[]{
        return this.pizzas;
    }

    getPizzaByName(name: string): Pizza{
        return this.pizzas.filter(pizza => pizza.name === name)[0];
    }
}