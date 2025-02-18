import {Injectable} from "@angular/core";
import {Voyage} from "../models/voyage";

@Injectable({
    providedIn: 'root'
})
export class VoyageService {
    private voyages: Voyage[] = [
        new Voyage(
            'paris',
            'c est la ville de l amour',
            4000
        ),
        new Voyage(
            'londres',
            'c est la ville de la pluie',
            5000
        ),
        new Voyage(
            'rome',
            'c est la ville de la pizza',
            6000
        ),
        new Voyage(
            'new york',
            'c est la ville de la statue de la liberté',
            7000
        ),
        new Voyage(
            'tokyo',
            'c est la ville de la technologie',
            8000
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

    ajouterAléatoire(){

    }
}