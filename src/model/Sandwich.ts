export class Sandwich {

    ekmektipi?: string;
    ekmekboyu?: string;
    peynir?: {
        beyaz?:string,
        kasar?:string,
        dil?:string
    };

    yesillik?: {
        domates?:string,
        salatalik?:string
    };

    susleme?: {
        kekik?:string,
        zeytinyagi?:string
    };

    sos?: {
        zeytinezmesi?:string,
        acuka?:string
    };

    fiyat?:number;

    private SPACE = ' ';

    getText() {

        (this.ekmekboyu === 'tam' ? 'Tam' : 'Yarým') +  this.SPACE +(this.ekmektipi === 'tahilli' ? 'tahýllý' : 'beyaz') + this.SPACE + 'ekmek,' + this.SPACE +
        this.peynir ? (this.peynir.beyaz ? 'beyaz peynir,' + this.SPACE : '') : '' +
        this.peynir ? (this.peynir.kasar ? 'kaþar peyniri,' + this.SPACE : '') : '' +
        this.peynir ? (this.peynir.dil ? 'dil peyniri' + this.SPACE : '') : '' +

        this.yesillik ? (this.yesillik.domates ? 'domates,' + this.SPACE : '') : '' +
        this.yesillik ? (this.yesillik.salatalik ? 'salatalýk,' + this.SPACE : '') : '' +

        this.susleme ? (this.susleme.kekik ? 'kekik,' + this.SPACE : '') : '' +
        this.susleme ? (this.susleme.zeytinyagi ? 'zeytinyaðý,' + this.SPACE : '') : '' +

        this.sos ? (this.sos.zeytinezmesi ? 'zeytin ezmesi,' + this.SPACE : '') : '' +
        this.sos ? (this.sos.acuka ? 'dil peyniri' + this.SPACE : '') : ''

    }

}
