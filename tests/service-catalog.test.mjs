import assert from "node:assert/strict";
import { stat } from "node:fs/promises";
import test from "node:test";
import { serviceCatalog, getService } from "../src/lib/service-catalog.ts";

test("every advertised expertise has a unique complete, serializable detail record", () => {
  const ids = ["sites-web", "applications", "plateformes", "communication", "data", "ia", "formation", "consulting"];
  assert.deepEqual(serviceCatalog.map(service => service.id).sort(), ids.sort());
  assert.deepEqual(JSON.parse(JSON.stringify(serviceCatalog)), serviceCatalog);
  for (const service of serviceCatalog) {
    assert.equal(getService(service.id), service);
    assert.ok(service.summary.length > 40 && service.summary.length <= 150);
    assert.ok(service.forWho.length && service.deliverables.length >= 4);
    assert.equal(service.benefits.length, 3);
    assert.ok(service.process.length >= 3);
    assert.equal(service.faq.length, 3);
    assert.match(service.example.title, /Scénario/);
  }
  assert.equal(getService("unknown-service"), undefined);
});

test("every service image is present, described and lightweight enough for mobile", async () => {
  for (const service of serviceCatalog) {
    const image = await stat(new URL(`../public${service.image}`, import.meta.url));
    assert.ok(image.size > 1000 && image.size < 180000, service.image);
    assert.ok(service.imageAlt.length > 25);
  }
});
