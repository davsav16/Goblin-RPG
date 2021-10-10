const Player = require("../lib/Player");
const Potion = require("../lib/Potion");

jest.mock("../lib/Potion.js");

console.log(new Potion());

test("creates a player object", () => {
  const player = new Player("Donald");

  expect(player.name).toBe("Donald");
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});

test("get the players's stats as an object", () => {
  const player = new Player("Donald");

  expect(player.getStats()).toHaveProperty("potions");
  expect(player.getStats()).toHaveProperty("health");
  expect(player.getStats()).toHaveProperty("strength");
  expect(player.getStats()).toHaveProperty("agility");
});

test("gets inventory from player or returns false", () => {
  const player = new Player("Donald");

  expect(player.getInventory()).toEqual(expect.any(Array));

  player.inventory = [];

  expect(player.getInventory()).toEqual(false);
});

test("gets player's health value", () => {
  const player = new Player("Donald");

  expect(player.getHealth()).toEqual(
    expect.stringContaining(player.health.toString())
  );
});

test("check to see if the player is alive or not", () => {
  const player = new Player("Donald");

  expect(player.isAlive()).toBeTruthy();

  player.health = 0;

  expect(player.isAlive()).toBeFalsy();
});

test("subtracts from players health", () => {
  const player = new Player("Donald");
  const oldHealth = player.health;

  player.reduceHealth(5);
  expect(player.health).toBe(oldHealth - 5);
  player.reduceHealth(99999);
  expect(player.health).toBe(0);
});

test("gets players attack value", () => {
  const player = new Player("Donald");
  player.strength = 10;

  expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
  expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});

test("adds a potion to the inventory", () => {
  const player = new Player("Donald");
  const oldCount = player.inventory.length;

  player.addPotion(new Potion());

  expect(player.inventory.length).toBeGreaterThan(oldCount);
});

test("uses a potion from inventory", () => {
  const player = new Player("Donald");
  player.inventory = [new Potion(), new Potion(), new Potion()];
  const oldCount = player.inventory.length;

  player.usePotion(1);

  expect(player.inventory.length).toBeLessThan(oldCount);
});
