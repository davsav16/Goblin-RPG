const Player = require("../lib/Player");
const Stew = require("../lib/Stew");

jest.mock("../lib/Stew.js");

console.log(new Stew());

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

  expect(player.getStats()).toHaveProperty("stews");
  expect(player.getStats()).toHaveProperty("beef");
  expect(player.getStats()).toHaveProperty("chicken");
  expect(player.getStats()).toHaveProperty("onion");
});

test("gets inventory from player or returns false", () => {
  const player = new Player("Donald");

  expect(player.getInventory()).toEqual(expect.any(Array));

  player.inventory = [];

  expect(player.getInventory()).toEqual(false);
});
