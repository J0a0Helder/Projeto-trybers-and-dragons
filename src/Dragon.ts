import Monster from './Monster';

export default class Dragon extends Monster {  
  constructor() {
    super();
    this._lifePoints = 999;
  }
}

// ref: https://www.treinaweb.com.br/blog/modificadores-de-acesso-no-typescript