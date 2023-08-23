import Archetype, { Ranger } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _energy: Energy;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _maxLifePoints: number;

  constructor(private name: string) {
    this._archetype = new Ranger(name);
    this._dexterity = 12;
    this._race = new Elf(name, this._dexterity);
    this._maxLifePoints = 20;
    this._lifePoints = this._maxLifePoints;
    this._strength = 8;
    this._defense = (this._dexterity + this._strength) / 2;
    this._energy = { 
      type_: this._archetype.energyType,
      amount: 10, 
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 1) {
      this._lifePoints -= attackPoints;
    } else {
      this._lifePoints -= 1;
    }
    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);

    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    const criticalMultiplier = 1.0;
    const powerSpecial = this._strength * 1.8 * criticalMultiplier;
    enemy.receiveDamage(powerSpecial);
  }

  // private _race: Race;
  // private _archetype: Archetype;
  // private _energy: Energy;
  // private _lifePoints: number;
  // private _strength: number;
  // private _defense: number;
  // private _dexterity: number;
  // private _maxLifePoints: number;
  get race() {
    return this._race;
  }

  get archetype() {
    return this._archetype;
  }

  get energy() {
    return { ...this._energy };
  }

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  get defense() {
    return this._defense;
  }

  get dexterity() {
    return this._dexterity;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }
}

export default Character;