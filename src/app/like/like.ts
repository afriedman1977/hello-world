
export class Like{
    private _selected: boolean;

    constructor(private _like?:number){
        this._selected = false;
    }

    get like() {
        return this._like
    }

    get selected(){
        return this._selected;
    }

   incrementLike(){
        if(this._like == null) this._like = 0;
        this._like++;
        this._selected = !this._selected;
    }
}