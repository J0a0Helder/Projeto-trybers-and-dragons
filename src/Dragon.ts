import Monster from './Monster';

export default class Dragon extends Monster {
  protected _lifePoints: number;
  
  constructor() {
    super();
    this._lifePoints = 9999;
  }
}

// ref: https://www.treinaweb.com.br/blog/modificadores-de-acesso-no-typescript