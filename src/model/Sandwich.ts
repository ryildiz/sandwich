import {SandwichLabels} from "./SndwichLabels";
import {SandwichProvider} from "../providers/sandwich-provider";
import {JsonObject, JsonProperty, JsonConvert, OperationMode, ValueCheckingMode} from "json2typescript"

@JsonObject
export class Sandwich {

    @JsonProperty("name", String)
    name: string = '';

    @JsonProperty("icerik", String)
    icerik: string = '';

    @JsonProperty("ekmektipi", String)
    ekmektipi: string = 'tahilli';

    @JsonProperty("ekmekboyu", String)
    ekmekboyu: string = 'tam';


    @JsonProperty("peynir", Object)
    peynir: {
        beyaz: boolean,
        beyazdilimsayisi: number,

        kasar: boolean,
        kasardilimsayisi: number,

        dil: boolean,
        dildilimsayisi: number

    } = {beyaz:false, beyazdilimsayisi:1, kasar:false, kasardilimsayisi:1, dil:false, dildilimsayisi:1};

    @JsonProperty("yesillik", Object)
    yesillik: {
        domates: boolean,
        salatalik: boolean
    } = {domates:false, salatalik:false};

    @JsonProperty("sossos", Object)
    sossos: {
        zeytinezmesi: boolean,
        acuka: boolean
    } = {zeytinezmesi:false, acuka:false};

    @JsonProperty("susleme", Object)
    susleme: {
        kekik: boolean,
        zeytinyagi: boolean
    } = {kekik:false, zeytinyagi:false};


    @JsonProperty("fiyat", Number)
    fiyat: number;

    public sandwichProvider : SandwichProvider;

    constructor(){

    }


    updatePrice() {
        this.sandwichProvider.updatePrice(this);
    };

    dilArtir(){
        if(this.peynir.dildilimsayisi<this.maxdilim()) {
            this.peynir.dildilimsayisi++;
            this.updatePrice();
        }
    };

    dilAzalt(){
        if(this.peynir.dildilimsayisi>1) {
            this.peynir.dildilimsayisi--;
            this.updatePrice();
        }
    };

    beyazArtir(){
        if(this.peynir.beyazdilimsayisi<this.maxdilim()) {
            this.peynir.beyazdilimsayisi++;
            this.updatePrice();
        }
    };

    beyazAzalt(){
        if(this.peynir.beyazdilimsayisi>1) {
            this.peynir.beyazdilimsayisi--;
            this.updatePrice();
        }
    };

    kasarArtir(){
        if(this.peynir.kasardilimsayisi<this.maxdilim()) {
            this.peynir.kasardilimsayisi++;
            this.updatePrice();
        }
    };

    kasarAzalt(){
        if(this.peynir.kasardilimsayisi>1) {
            this.peynir.kasardilimsayisi--;
            this.updatePrice();
        }
    };


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

        (this.sossos ? (this.sossos.zeytinezmesi ? 'zeytin ezmesi,' + SPACE : '') : '') +
        (this.sossos ? (this.sossos.acuka ? 'acuka' + SPACE : '') : '');

       this.icerik = this.icerik && this.icerik.trim().endsWith(',') ? this.icerik.substr(0, this.icerik.lastIndexOf(',')) : this.icerik;

       return this.icerik;

    };

}
