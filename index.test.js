const test = require("node:test");
const assert = require("node:assert");
const config = require("./index.js");

test("The configuration is an array of strings", () => {
	assert.strictEqual(Array.isArray(config), true);
	config.forEach((item) => {
		assert.strictEqual(typeof item, "string");
	});
});

test("The configuration contains at least one item", () => {
	assert.strictEqual(config.length > 0, true);
});

test("The configuration supports the last 2 versions of a browser", () => {
	assert.strictEqual(config.includes("last 2 versions"), true);
});

test("The configuration supports more than 0.5% of browsers used in Germany", () => {
	assert.strictEqual(config.includes("> 0.5% in DE"), true);
});

test("The configuration supports Firefox Extended Support Release", () => {
	assert.strictEqual(config.includes("Firefox ESR"), true);
});

test("The configuration supports only browsers that are not dead", () => {
	assert.strictEqual(config.includes("not dead"), true);
});
