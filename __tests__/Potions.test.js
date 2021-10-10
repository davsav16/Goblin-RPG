const Potion = require("../lib/potion");

test("creates new health", () => {
  const potion = new Potion("health");

  expect(potion.name).toBe("health");
  expect(potion.value).toEqual(expect.any(Number));
});

test("creates a random new potion", () => {
  const potion = new Potion();

  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(0);
  expect(potion.value).toEqual(expect.any(Number));
});
