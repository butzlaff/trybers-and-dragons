import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  static createdArchetypeInstancesCounter = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.createdArchetypeInstancesCounter += 1;
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

export default Mage;