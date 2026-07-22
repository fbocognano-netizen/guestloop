import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("landing page contains Guest Loop conversion content", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const layout = await readFile(
    new URL("../app/layout.tsx", import.meta.url),
    "utf8",
  );

  assert.match(layout, /Guest Loop - Fidelisation pour restaurants/);
  assert.match(page, /https:\/\/calendly\.com\/overside\/30min/);
  assert.match(page, /50\+/);
  assert.match(page, /restaurants déjà inscrits en France/);
  assert.match(page, /Le club fidélité qui donne une vraie raison de revenir/);
  assert.match(page, /Des dizaines de milliers d'euros/);
  assert.doesNotMatch(page + layout, /codex-preview|SkeletonPreview/);
});
