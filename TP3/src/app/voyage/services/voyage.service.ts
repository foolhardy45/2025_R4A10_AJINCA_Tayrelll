import {Injectable} from "@angular/core";
import {Voyage} from "../models/voyage";
import {DESTINATIONS, DESCRIPTIONS, PRIX} from "../../data/data"

@Injectable({
    providedIn: 'root'
})
export class VoyageService {
    private voyages: Voyage[] = [
        new Voyage(
            'Paris, France',
            'c est la ville de l amour',
            4000,
            0
        ),
        new Voyage(
            'Londres, Angleterre',
            'c est la ville de la pluie',
            5000,
            1
        ),
        new Voyage(
            'Rome, Italie',
            'c est la ville de la pizza',
            6000,
            2
        ),
        new Voyage(
            'New York, USA',
            'c est la ville de la statue de la liberté',
            7000,
            3
        ),
        new Voyage(
            'Tokyo, Japon',
            'c est la ville de la technologie',
            8000,
            4
        ),
    ];

    constructor() {}


    getAllVoyages() {
        return this.voyages;
    }

    getVoyageById(id: number) {
        return this.voyages[id];
    }


    deleteVoyage(id: number) {
        this.voyages = this.voyages.filter(voyage => voyage.id !== id);

    }

    ajouterAleatoire(){
        const randomDestination = DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)];
        const randomDescription = DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)];
        const randomPrix = PRIX[Math.floor(Math.random() * PRIX.length)];
        const randomId = Math.floor(Math.random() * 1000);

        return new Voyage(randomDestination, randomDescription, randomPrix,randomId);
    }

    addVoyage(voyage: Voyage) {
        this.voyages.push(voyage);
    }
}