import {TranslateService} from "@ngx-translate/core";

export class SandwichLabels {

    yarim: string;
    tahilli: string;
    kasar: string;
    salatalik: string;
    zeytinyagi: string;


    constructor(translate: TranslateService) {

        translate.get('yarim').subscribe(value => { this.yarim = value; });
        translate.get('tahilli').subscribe(value => {this.tahilli = value});
        translate.get('kasar').subscribe(value => {this.kasar = value});
        translate.get('salatalik').subscribe(value => { this.salatalik = value});
        translate.get('zeytinyagi').subscribe(value => { this.zeytinyagi = value});
    }



}