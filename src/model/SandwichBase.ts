export class SandwichBase {

    name?: string;
    icerik?: string;
    ekmektipi?: string;
    ekmekboyu?: string;
    peynir?: {
        beyaz?: string,
        beyazdilimsayisi?: number,
        kasar?: string,
        kasardilimsayisi?: number,
        dil?: string
        dildilimsayisi?: number
    } = {};

    yesillik?: {
        domates?: string,
        salatalik?: string
    } = {};

    susleme?: {
        kekik?: string,
        zeytinyagi?: string
    } = {};

    sos?: {
        zeytinezmesi?: string,
        acuka?: string
    } = {};

    fiyat?: number;
    
}
