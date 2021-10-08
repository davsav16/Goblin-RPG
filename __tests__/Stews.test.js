const Stew = require("../lib/Stew");

test("creates new health stew", () => {
  const stew = new Stew("beef");

  expect(stew.name).toBe("beef");
  expect(stew.value).toEqual(expect.any(Number));
});

test("creates a random new stew", () => {
  const stew = new Stew();

  expect(stew.name).toEqual(expect.any(String));
  expect(stew.name.length).toBeGreaterThan(0);
  expect(stew.value).toEqual(expect.any(Number));
});
