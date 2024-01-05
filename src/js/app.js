// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;
  }

    if (this.name.length < 2 || this.name.length > 10) {
      throw new Error('min 2 letters, max 10 letters');
    }

    const types = [
        'Bowman',
        'Swordsman',
        'Magician',
        'Undead',
        'Zombie',
        'Daemon'
    ]

    types.forEach((typeName) => {
      if (this.type !== typeName) {
        throw new Error('Write down your character correctly');
      }
    })
}

class Bowman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Bowman';
    this.attack = 25;
    this. defence = 25;
  }
}

class Swordsman extends Character {
    constructor(name) {
      super(name);
      this.type = 'Swordsman';
      this.attack = 40;
      this. defence = 10;
    }
  }

  class Magician extends Character {
    constructor(name) {
      super(name);
      this.type = 'Magician';
      this.attack = 10;
      this. defence = 40;
    }
  }

  class Undead extends Character {
    constructor(name) {
      super(name);
      this.type = 'Undead';
      this.attack = 25;
      this. defence = 25;
    }
  }

  class Zombie extends Character {
    constructor(name) {
      super(name);
      this.type = 'Zombie';
      this.attack = 40;
      this. defence = 10;
    }
  }

  class Daemon extends Character {
    constructor(name) {
      super(name);
      this.type = 'Daemon';
      this.attack = 10;
      this. defence = 40;
    }
  }