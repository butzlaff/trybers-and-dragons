// import EnergyType from '../types/EnergyType';

type EnergyType = 'stamina' | 'mana';

interface Energy {
  type_: EnergyType;
  amount: number;
}

export { EnergyType };

export default Energy;