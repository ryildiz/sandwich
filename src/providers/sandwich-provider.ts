import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {Sandwich} from "../model/Sandwich";
import {SandwichBase} from "../model/SandwichBase";

@Injectable()
export class SandwichProvider {

    constructor(private fdb:AngularFireDatabase) {
    }

    updatePrice(sandwich:SandwichBase) {

        sandwich.fiyat = Math.round(Math.random() * 100);
        // TODO:
        console.log('todo ...');
    }

}