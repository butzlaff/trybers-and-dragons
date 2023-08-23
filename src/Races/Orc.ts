import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static createdRacesInstancesCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.createdRacesInstancesCounter += 1;
  }

  static createdRacesInstances(): number {
    return this.createdRacesInstancesCounter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get name(): string {
    return this.name;
  }

  get dexterity(): number {
    return this.dexterity;
  }
}

export default Orc;