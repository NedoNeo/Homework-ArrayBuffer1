export class Magicion {
    constructor(health,distane) {
        this.health = health;
        this.distane = distane;
    }

    get attack() {
        if(this._stoned === true) {
           return ((this._attack - this._attack*0.1*(this.distane - 1))  - Math.log2(this.distane) * 5)
        } else {
            return (this._attack - this._attack*0.1*(this.distane - 1));
        }
    }

    set attack(value) {
        this._attack = value;
    }

    get stoned() {
        return this._stoned;
    }

    set stoned(value) {
        this._stoned = value;
    }

}

export class Daemon extends Magicion {
    constructor(health,distane) {
        super(health,distane);
        this.health = health;
        this.distane = distane;
    }
}