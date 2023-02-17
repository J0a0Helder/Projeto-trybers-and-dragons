import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  constructor(
    public player: Fighter,
    public enemies: SimpleFighter[] | Fighter[],
  ) {
    super(player);
  }

  private _battles(enemy: SimpleFighter | Fighter) {
    while (this.player.lifePoints !== -1 && enemy.lifePoints !== -1) {
      this.player.attack(enemy);
      enemy.attack(this.player);
    } // vi na monitoria da Dani e do Henrique
  }

  private _enemiesBattlesGenerator() {
    this.enemies.map((enemy) => this._battles(enemy));
  }

  fight(): number {
    this._enemiesBattlesGenerator();
    return super.fight();
  }
}