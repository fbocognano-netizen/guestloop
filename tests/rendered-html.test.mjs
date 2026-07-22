import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("landing page contains Guest Loop conversion content", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const layout = await readFile(
    new URL("../app/layout.tsx", import.meta.url),
    "utf8",
  );
  const seo = await readFile(new URL("../app/seo.ts", import.meta.url), "utf8");

  assert.match(seo, /Guest Loop \| Fidélisation digitale/);
  assert.match(seo, /https:\/\/guestloop-fr\.netlify\.app/);
  assert.match(layout, /alternates/);
  assert.match(layout, /openGraph/);
  assert.match(page, /application\/ld\+json/);
  assert.match(seo, /https:\/\/calendly\.com\/overside\/30min/);
  assert.match(seo, /https:\/\/guestloop\.overside360\.fr\//);
  assert.match(seo, /https:\/\/overside360\.fr\//);
  assert.match(page, /Overside, agence digitale à Aix-en-Provence/);
  assert.match(page, /Marque développée par/);
  assert.match(page, /Espace commerce/);
  assert.match(page, /50\+/);
  assert.match(page, /restaurants déjà inscrits en France/);
  assert.match(page, /commerces de proximité/);
  assert.match(page, /boutiques/);
  assert.match(page, /boulangeries/);
  assert.match(page, /Non\. Les premiers déploiements/);
  assert.match(page, /Le club fidélité qui donne une vraie raison de revenir/);
  assert.match(page, /Des dizaines de milliers d'euros/);
  assert.doesNotMatch(page + layout, /codex-preview|SkeletonPreview/);
});
