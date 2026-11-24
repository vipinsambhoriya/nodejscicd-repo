
const test = require("node:test");
const assert = require("node:assert");

test("Application health check should be successful", async () => {
    const response = await fetch("http://127.0.0.1:3000/health");

    assert.strictEqual(response.status, 200);

    const message = await response.text();
    assert.strictEqual(message, "Application is healthy");
});
