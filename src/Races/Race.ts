abstract class Race {
  private _dexterity: number;
  private _name: string;

  constructor(name: string, dexterity: number) { 
    this._name = name;
    this._dexterity = dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get name(): string {
    return this._name;
  }

  abstract get maxLifePoints():number;
}

export default Race;