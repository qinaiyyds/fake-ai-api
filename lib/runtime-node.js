"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

function readAsset(name) {
  const candidates = [
    path.join(process.cwd(), name),
    path.join(__dirname, "..", name),
  ];

  for (const file of candidates) {
    try {
      return fs.readFileSync(file, "utf8");
    } catch (err) {
      console.warn("[fake-ai-api] 读取失败:", file, err.code);
    }
  }

  return "";
}

module.exports = {
  assets: {
    ascii: readAsset("ascii.txt"),
    indexHtml: readAsset("index.html"),
    robotsTxt: readAsset("robots.txt"),
    sitemapXml: readAsset("sitemap.xml"),
  },
  env: {
    FAKE_API_KEY: process.env.FAKE_API_KEY,
  },
  randomValues: (n) => crypto.randomBytes(n),
};
