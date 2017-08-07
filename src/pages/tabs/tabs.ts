import { Component } from '@angular/core';

import { MySandwichesPage } from '../mysandwich/mysandwiches';
import { CreateSandwichPage } from "../createsandwich/createsandwich";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    sandivichTab: any = MySandwichesPage;
    createSandwichTab: any = CreateSandwichPage;

    constructor() {
        console.log("I am called!");
    }

}
