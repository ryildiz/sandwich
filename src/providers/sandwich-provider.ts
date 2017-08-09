import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {Sandwich} from "../model/Sandwich";

@Injectable()
export class SandwichProvider {

    constructor(private fdb:AngularFireDatabase) {
    }

    updatePrice(sandwich:Sandwich) {

        sandwich.fiyat = Math.round(Math.random() * 100);
        // TODO:
        console.log('todo ...');
    }

}