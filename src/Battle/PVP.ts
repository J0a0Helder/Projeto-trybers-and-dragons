import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(public fighter1: Fighter, public fighter2: Fighter) {
    super(fighter2);
  }

  private _battles() {
    while (this.fighter1.lifePoints !== -1 && this.fighter2.lifePoints !== -1) {
      this.fighter1.attack(this.fighter2);
      this.fighter2.attack(this.fighter1);
    } // vi na monitoria da Dani e do Henrique
  }

  fight(): number {
    this._battles();
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}