import Character from '../character';
import Bowman from '../bowman';
import Daemon from '../daemon';



test('Слишком длинное имя', () => {
  expect(() => new Character('Christopher', 'Magician')).toThrowError();
});

test('Слишком короткое имя', () => {
    expect(() => new Character ('K', 'Swordsman')).toThrowError();
});

test('Ошибка в type', () => {
  expect(() => new Character('Arthur', 'Archer')).toThrowError();
});

test('Нельзя повысить level мертвому игроку', () => {
  expect(() => {
    const deadman = new Character('John', 'Magician');
    deadman.health = 0;
    deadman.levelUp();
  }).toThrowError();
});

test('проверка повышения уровня', () => {
  const leveledPerson = new Character('Peter', 'Zombie');
  leveledPerson.levelUp();
  const newLevel = leveledPerson.level;
  expect(newLevel).toBe(2);
});

test('проверка повышения аттаки', () => {
  const attackUp = new Daemon('Bella', 'Daemon');
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
  const damagedCharacter = new Bowman('Kris', 'Bowman');
  damagedCharacter.damage(20);
  expect(damagedCharacter.health).toBe(85);
});