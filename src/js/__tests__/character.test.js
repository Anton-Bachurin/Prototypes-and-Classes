import Character from '../character';

test('Слишком длинное имя', () => {
  const magician = new Character('Christopher', 'Magician');
  const result = checkNameLength(magician);
  expect(result).toBe(new Error('min 2 letters, max 10 letters'));
});

test('Слишком короткое имя', () => {
    const swordsman = new Character('K', 'Swordsman');
    const result = checkNameLength(swordsman);
    expect(result).toBe(new Error('min 2 letters, max 10 letters'));
});

test('Ошибка в type', () => {
  const archer = new Character('Arthur', 'Archer');
  const result = checkType(archer);
  expect(result).toBe(new Error('Choose a correct type'));
});

test('Нельзя повысить level мертвому игроку', () => {
  const deadman = new Character('John', 'Magician');
  deadman.health = 0;
  const result = deadman.levelUp();
  expect(result).toBe(new Error('Sorry, your character is dead'));
});

test('проверка повышения уровня', () => {
  const leveledPerson = new Character('Peter', 'Zombie');
  leveledPerson.levelUp();
  const newLevel = leveledPerson.level;
  expect(newLevel).toBe(2);
});

test('проверка повышения аттаки', () => {
  const attackUp = new Character('Bella', 'Daemon');
  attackUp.levelUp();
  const newAttack = attackUp.attack;
  expect(newAttack).toBe(12);
});

test('проверка восстановления здоровья', () => {
  const healthyCharacter = new Character('Freddy', 'Undead');
  healthyCharacter.health = 85;
  healthyCharacter.levelUp();
  expect(healthyCharacter.health).toBe(100);
});

test('проверка нанесенного урона', () => {
  const damagedCharacter = new Character('Kris', 'Bowman');
  damagedCharacter.damage(30);
  expect(damagedCharacter.health).toBeCloseTo(22,5);
});