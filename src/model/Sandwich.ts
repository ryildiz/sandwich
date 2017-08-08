import {TranslateService} from "@ngx-translate/core";

export class Sandwich {

    name?:string;
    icerik?:string;
    ekmektipi?: string;
    ekmekboyu?: string;
    peynir?: {
        beyaz?:string,
        beyazdilimsayisi?:number,
        kasar?:string,
        kasardilimsayisi?:number,
        dil?:string
        dildilimsayisi?:number
    } = {};

    yesillik?: {
        domates?:string,
        salatalik?:string
    } = {};

    susleme?: {
        kekik?:string,
        zeytinyagi?:string
    } = {};

    sos?: {
        zeytinezmesi?:string,
        acuka?:string
    } = {};

    fiyat?:number;


    constructor() {
        this.peynir.kasardilimsayisi=1;
        this.peynir.beyazdilimsayisi=1;
        this.peynir.dildilimsayisi=1;
    }

    dilArtir(){
        if(this.peynir.dildilimsayisi<this.MAXDILIM)
            this.peynir.dildilimsayisi++;
    }

    dilAzalt(){
        if(this.peynir.dildilimsayisi>1)
            this.peynir.dildilimsayisi--;
    }

    beyazArtir(){
        if(this.peynir.beyazdilimsayisi<this.MAXDILIM)
            this.peynir.beyazdilimsayisi++;
    }

    beyazAzalt(){
        if(this.peynir.beyazdilimsayisi>1)
            this.peynir.beyazdilimsayisi--;
    }

    kasarArtir(){
        if(this.peynir.kasardilimsayisi<this.MAXDILIM)
            this.peynir.kasardilimsayisi++;
    }

    kasarAzalt(){
        if(this.peynir.kasardilimsayisi>1)
            this.peynir.kasardilimsayisi--;
    }

    private MAXDILIM = 10;
    private SPACE = ' ';

    setIcerik(translate: TranslateService) {

        let yarim       = translate.get('yarim').subscribe(value => {
            console.log('---> ' + value);
            return value;
        });
        let tahilli     = translate.get('tahilli').subscribe(value => {console.log('---> ' + value); return value});
        let kasar       = translate.get('kasar').subscribe(value => {console.log('---> ' + value); return value});
        let salatalik   = translate.get('salatalik').subscribe(value => {console.log('---> ' + value); return value});
        let zeytinyagi  = translate.get('zeytinyagi').subscribe(value => {console.log('---> ' + value); return value});

       this.icerik =
        (this.ekmekboyu === 'tam' ? 'Tam' : yarim) +  this.SPACE +(this.ekmektipi === 'tahilli' ? tahilli : 'beyaz') + this.SPACE + 'ekmek,' + this.SPACE  +
        (this.peynir ? (this.peynir.beyaz ? this.peynir.beyazdilimsayisi + this.SPACE + 'dilim beyaz peynir,'  + this.SPACE : '') : '') +
        (this.peynir ? (this.peynir.kasar ? this.peynir.kasardilimsayisi + this.SPACE + 'dilim '+kasar+' peyniri,' + this.SPACE : '') : '') +
        (this.peynir ? (this.peynir.dil ? this.peynir.dildilimsayisi + this.SPACE + 'dilim dil peyniri,' + this.SPACE : '') : '') +

        (this.yesillik ? (this.yesillik.domates ? 'domates,' + this.SPACE : '') : '') +
        (this.yesillik ? (this.yesillik.salatalik ? salatalik + ',' + this.SPACE : '') : '') +

        (this.susleme ? (this.susleme.kekik ? 'kekik,' + this.SPACE : '') : '') +
        (this.susleme ? (this.susleme.zeytinyagi ? zeytinyagi + ',' + this.SPACE : '') : '') +

        (this.sos ? (this.sos.zeytinezmesi ? 'zeytin ezmesi,' + this.SPACE : '') : '') +
        (this.sos ? (this.sos.acuka ? 'acuka' + this.SPACE : '') : '');

       return this.icerik;

    }

}
