import {Injectable} from "@angular/core";
import {OurService} from "../models/our-service";


@Injectable({
    providedIn: 'root'
})
export class OurServiceService {
    private ourServices: OurService[] = [
        new OurService(
            'assets/searchDoctor.svg',
            'Search doctor',
            'Choose your doctor from thousands of specialist, general, and trusted hospitals',
            1
        ),
        new OurService(
            'assets/OnlinePharma.svg',
            'Search doctor',
            'Choose your doctor from thousands of specialist, general, and trusted hospitals',
            2
        ),
        new OurService(
            'assets/Consultation.svg',
            'Search doctor',
            'Choose your doctor from thousands of specialist, general, and trusted hospitals',
            3
        ),
        new OurService(
            'assets/Detail.svg',
            'Search doctor',
            'Choose your doctor from thousands of specialist, general, and trusted hospitals',
            4
        ),
        new OurService(
            'assets/Emergency.svg',
            'Search doctor',
            'Choose your doctor from thousands of specialist, general, and trusted hospitals',
            5
        ),
        new OurService(
            'assets/Tracking.svg',
            'Search doctor',
            'Choose your doctor from thousands of specialist, general, and trusted hospitals',
            6
        ),
    ];

    constructor() {
    }

    getAllOurServices() {
        return this.ourServices;
    }
}

