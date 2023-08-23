import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static createdArchetypeInstancesCounter = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.createdArchetypeInstancesCounter += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  get name(): string {
    return this.name;
  }

  static createdArchetypeInstances(): number {
    return this.createdArchetypeInstancesCounter;
  }
}

export default Necromancer;