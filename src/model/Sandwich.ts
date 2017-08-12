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

    @JsonProperty("susleme", Object)
    susleme: {
        kekik: boolean,
        zeytinyagi: boolean
    } = {kekik:false, zeytinyagi:false};


    @JsonProperty("sos", Object)
    sos: {
        zeytinezmesi: boolean,
        acuka: boolean
    } = {zeytinezmesi:false, acuka:false};

    @JsonProperty("fiyat", Number)
    fiyat: number;

    public sandwichProvider : SandwichProvider;

    constructor(){
            // this.peynir.kasardilimsayisi=1;
            // this.peynir.beyazdilimsayisi=1;
            // this.peynir.dildilimsayisi=1;
            // this.ekmektipi='tahilli';
            // this.ekmekboyu='tam';
    }

    // constructor(private sandwichProvider : SandwichProvider) {
    //     this.peynir.kasardilimsayisi=1;
    //     this.peynir.beyazdilimsayisi=1;
    //     this.peynir.dildilimsayisi=1;
    //     this.ekmektipi='tahilli';
    //     this.ekmekboyu='tam';
    // }

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

    getModel() : any{
        let s : any = {};
        s.name= this.name;
        s.icerik=this.icerik;
        s.ekmektipi=this.ekmektipi;
        s.ekmekboyu=this.ekmekboyu;

        s.peynir=this.peynir;
        s.peynir.kasar=this.peynir.kasar;
        s.peynir.kasardilimsayisi=this.peynir.kasardilimsayisi;
        s.peynir.beyaz=this.peynir.beyaz;
        s.peynir.beyazdilimsayisi=this.peynir.beyazdilimsayisi;
        s.peynir.dil=this.peynir.dil;
        s.peynir.dildilimsayisi=this.peynir.dildilimsayisi;

        s.yesillik=this.yesillik;
        s.yesillik.salatalik=this.yesillik.salatalik;
        s.yesillik.domates=this.yesillik.domates;

        s.susleme=this.susleme;
        s.susleme.kekik=this.susleme.kekik;
        s.susleme.zeytinyagi=this.susleme.zeytinyagi;

        s.sos=this.sos;
        s.sos.acuka=this.sos.acuka;
        s.sos.zeytinezmesi=this.sos.zeytinezmesi;

        s.fiyat=this.fiyat;

        return s;
    }

    
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

    };

}
