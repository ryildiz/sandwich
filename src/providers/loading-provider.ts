import {Injectable} from "@angular/core";
import {AlertController, Loading, LoadingController} from "ionic-angular";
import {TranslateService} from "@ngx-translate/core";

@Injectable()
export class LoadingProvider {

    public loading : Loading;
    loadingText: string;
    errorText: string;
    errorDescriptionText: string;
    infoText: string;
    ok: string;

    constructor(private loadingCtrl:LoadingController,
                private translate: TranslateService,
                private alertCtrl:AlertController) {

        translate.get('loading').subscribe(value => {
            this.loadingText = value;
        });

        translate.get('errorText').subscribe(value => {
            this.errorText = value;
        });

        translate.get('errorDescriptionText').subscribe(value => {
            this.errorDescriptionText = value;
        });

        translate.get('infoText').subscribe(value => {
            this.infoText = value;
        });

        translate.get('ok').subscribe(value => {
            this.ok = value;
        });


    }

    startLoading(){

        this.loading = this.loadingCtrl.create({
            content: this.loadingText,
            duration: 60000
        });

        this.loading.onDidDismiss((success:boolean) => {

            if(success)
                return;

            this.raiseSystemError();

        });

        this.loading.present();
    }

    public dismiss(success:boolean){
        if(this.loading)
            this.loading.dismiss(success);
    }


    getLoading():Loading{

        let loading = this.loadingCtrl.create({
            content: this.loadingText,
            duration: 60000
        });

        loading.onDidDismiss((success:boolean) => {

            if(success)
                return;

            this.raiseSystemError();

            return;
        });

        return loading;

    }

    public raiseSystemError(){
        let alert = this.alertCtrl.create({
            title: this.errorText,
            subTitle: this.errorDescriptionText,
            buttons: [this.ok]
        });
        alert.present();
    }

}