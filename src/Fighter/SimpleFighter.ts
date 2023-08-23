import Fighter from './Fighter';

// type SimpleFighter = Pick<Fighter, 'lifePoints' | 
// 'strength' | 'attack' | 'receiveDamage'>;

interface SimpleFighter extends Pick<Fighter, 'lifePoints' | 
'strength' | 'receiveDamage'> {
  attack(enemy: SimpleFighter): void;
}

export default SimpleFighter;