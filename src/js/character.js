export default class Character {
    constructor(name, type) {
      const types = [
        'Bowman',
        'Swordsman',
        'Magician',
        'Undead',
        'Zombie',
        'Daemon'
      ]
  
      if (name.length < 2 || name.length > 10) {
          throw new Error('min 2 letters, max 10 letters');
      }
      
      if (!(types.includes(type))) {
        throw new Error('Choose a correct type');
      }

      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = null;
      this.defence = null;  
    }
    
    levelUp() {
      if (this.health === 0) {
        throw new Error('Sorry, your character is dead');
      } else {
      this.level++;
      this.attack += this.attack / 5; 
      this.health = 100;
      }
    }

    damage(points) {
      if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
      }
    }
  }
  