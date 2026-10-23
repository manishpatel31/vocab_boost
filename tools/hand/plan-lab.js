#!/usr/bin/env node
/* Give the hand-built subject apps a Plan and a Lab tab: adds study-games.js (the Lab games) and study-plan-lab.js
   (the two tabs, built from the page's own lessons and tables) after the page's script. Safe to run again.
     node tools/hand/plan-lab.js && node tools/stamp.js */
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..", "..");
const PAGES = ["polity", "economics", "biology", "space", "sports", "festivals", "folk-dances", "govt-schemes", "reports-indices",
  "appointments", "ipr-plans", "census", "intl-orgs", "bns-bnss-bsa"].map(n => `study-${n}.html`);
const TAGS = '<script src="study-games.js?v=00000000"></script>\n<script src="study-plan-lab.js?v=00000000"></script>\n';
PAGES.forEach(f => {
  const file = path.join(ROOT, f); let s = fs.readFileSync(file, "utf8");
  if (s.includes("study-plan-lab.js")) return console.log(f + ": already has Plan and Lab");
  // after the page's own boot, or (pages on study-core.js, like BNS) after the study-core.js tag
  const boot = s.indexOf("/* boot */"), core = s.search(/<script src="study-core\.js\?v=[^"]*"><\/script>/);
  const end = boot >= 0 ? s.indexOf("</script>", boot) : core;
  if (end < 0) throw new Error(f + ": no /* boot */ block or study-core.js tag to put the tabs after");
  const at = s.indexOf("</script>", end) + "</script>".length;
  s = s.slice(0, at) + "\n" + TAGS + s.slice(at).replace(/^\n/, "");
  fs.writeFileSync(file, s); console.log(f + ": Plan and Lab added");
});
