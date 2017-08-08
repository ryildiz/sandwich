import {SandwichLabels} from "./SndwichLabels";

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
        this.ekmektipi='tahilli';
        this.ekmekboyu='tam';
    }

    dilArtir(){
        if(this.peynir.dildilimsayisi<this.maxdilim())
            this.peynir.dildilimsayisi++;
    }

    dilAzalt(){
        if(this.peynir.dildilimsayisi>1)
            this.peynir.dildilimsayisi--;
    }

    beyazArtir(){
        if(this.peynir.beyazdilimsayisi<this.maxdilim())
            this.peynir.beyazdilimsayisi++;
    }

    beyazAzalt(){
        if(this.peynir.beyazdilimsayisi>1)
            this.peynir.beyazdilimsayisi--;
    }

    kasarArtir(){
        if(this.peynir.kasardilimsayisi<this.maxdilim())
            this.peynir.kasardilimsayisi++;
    }

    kasarAzalt(){
        if(this.peynir.kasardilimsayisi>1)
            this.peynir.kasardilimsayisi--;
    }

    maxdilim() {
        return 10;
    };
    
    setIcerik(labels:SandwichLabels) {

      let SPACE = ' ';
    
       this.icerik =
        (this.ekmekboyu === 'tam' ? 'Tam' : labels.yarim) +  SPACE +(this.ekmektipi === 'tahilli' ? labels.tahilli : 'beyaz') + SPACE + 'ekmek,' + SPACE  +
        (this.peynir ? (this.peynir.beyaz ? this.peynir.beyazdilimsayisi + SPACE + 'dilim beyaz peynir,'  + SPACE : '') : '') +
        (this.peynir ? (this.peynir.kasar ? this.peynir.kasardilimsayisi + SPACE + 'dilim '+labels.kasar+' peyniri,' + SPACE : '') : '') +
        (this.peynir ? (this.peynir.dil ? this.peynir.dildilimsayisi + SPACE + 'dilim dil peyniri,' + SPACE : '') : '') +

        (this.yesillik ? (this.yesillik.domates ? 'domates,' + SPACE : '') : '') +
        (this.yesillik ? (this.yesillik.salatalik ? labels.salatalik + ',' + SPACE : '') : '') +

        (this.susleme ? (this.susleme.kekik ? 'kekik,' + SPACE : '') : '') +
        (this.susleme ? (this.susleme.zeytinyagi ? labels.zeytinyagi + ',' + SPACE : '') : '') +

        (this.sos ? (this.sos.zeytinezmesi ? 'zeytin ezmesi,' + SPACE : '') : '') +
        (this.sos ? (this.sos.acuka ? 'acuka' + SPACE : '') : '');

       this.icerik = this.icerik && this.icerik.trim().endsWith(',') ? this.icerik.substr(0, this.icerik.lastIndexOf(',')) : this.icerik;

       return this.icerik;

    }

}
