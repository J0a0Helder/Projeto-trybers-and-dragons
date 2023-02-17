import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  constructor(
    public player: Fighter,
    public enemies: SimpleFighter[] | Fighter[],
  ) {
    super(player);
  }

  private _battles() {
    while (this.player.lifePoints !== -1 && this.enemies.some(
      (enemy) => enemy.lifePoints !== -1,
    )) {
      this.enemies.forEach((enemy) => {
        this.player.attack(enemy);
        enemy.attack(this.player);
      });
    } // vi na monitoria do Paz
  }

  fight(): number {
    this._battles();
    return super.fight();
  }
}