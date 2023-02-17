import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import Battle, { PVE, PVP } from './Battle';

const player1 = new Character('Galadriel');
const player2 = new Character('Elrond');
const player3 = new Character('Lúthien'); 
const monster1 = new Monster();
const monster2 = new Dragon();

for (let i = 0; i < 12; i += 1) player1.levelUp();

const pvp = new PVP(player1, player2);
const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  battles.forEach((battle) => battle.fight());
}

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };