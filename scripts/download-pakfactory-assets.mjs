import { mkdir, writeFile, access } from "node:fs/promises";
import path from "node:path";

const assetDir = path.join(process.cwd(), "public", "images", "pakfactory");

const assets = [
  {
    file: "logo.jpg",
    url: "https://media.pakfactory.com/logo/websites/1/logo1.jpg",
  },
  {
    file: "hero-banner.jpg",
    url: "https://media.pakfactory.com/media_upload/coding_guide/pakfactory-homepage-banner_4_.jpg",
  },
  {
    file: "stars.svg",
    url: "https://media.pakfactory.com/media_upload/coding_guide/4half-stars-green.svg",
  },
  {
    file: "review-customers.svg",
    url: "https://media.pakfactory.com/media_upload/coding_guide/review-customers-logo.svg",
  },
  {
    file: "folding-carton-boxes.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/folding-carton-boxes.webp",
  },
  {
    file: "corrugated-boxes.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/corrugated-boxes.webp",
  },
  {
    file: "rigid-boxes.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/rigid-boxes.webp",
  },
  {
    file: "box-packaging-inserts.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/box-packaging-inserts.webp",
  },
  {
    file: "paper-shopping-bags.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/paper-shopping-bags.webp",
  },
  {
    file: "reusable-bags.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/reusable-bags.webp",
  },
  {
    file: "mailer-bags.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/mailer-bags.webp",
  },
  {
    file: "flexible-pouches.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/flexible-pouches.webp",
  },
  {
    file: "tin-containers.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/tin-containers.webp",
  },
  {
    file: "pop-displays.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/pop-displays.webp",
  },
  {
    file: "stickers-and-labels.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/stickers-and-labels.webp",
  },
  {
    file: "tissue-paper-and-liners.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/tissue-paper-and-liners.webp",
  },
  {
    file: "packing-tape.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/packing-tape.webp",
  },
  {
    file: "card-inserts.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/card-inserts.webp",
  },
  {
    file: "stamp-regular-green.svg",
    url: "https://media.pakfactory.com/media_upload/coding_guide/stamp-regular-green.svg",
  },
  {
    file: "total-packaging-success.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/total-packaging-success.webp",
  },
  {
    file: "icon-save-cost.svg",
    url: "https://media.pakfactory.com/media_upload/coding_guide/icon-save-cost.svg",
  },
  {
    file: "icon-reliability.svg",
    url: "https://media.pakfactory.com/media_upload/coding_guide/icon-reliability.svg",
  },
  {
    file: "icon-brand-impact.svg",
    url: "https://media.pakfactory.com/media_upload/coding_guide/icon-brand-impoact.svg",
  },
  {
    file: "icon-sustainable.svg",
    url: "https://media.pakfactory.com/media_upload/coding_guide/icon-sustainable.svg",
  },
  {
    file: "manufacturer.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/img-manufacturer-b.webp",
  },
  {
    file: "icon-one-tree.svg",
    url: "https://media.pakfactory.com/media_upload/coding_guide/icon-one-tree.svg",
  },
  {
    file: "icon-iso.svg",
    url: "https://media.pakfactory.com/media_upload/coding_guide/icon-iso.svg",
  },
  {
    file: "icon-fsc.svg",
    url: "https://media.pakfactory.com/media_upload/coding_guide/icon-fsc.svg",
  },
  {
    file: "sustainably-responsible-packaging.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/sustainably-responsible-packaging.webp",
  },
  {
    file: "sustainability2.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/sustainability2.webp",
  },
  {
    file: "apparel-packaging-solution.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/apparel-packaging-solution.webp",
  },
  {
    file: "bakery-and-cake-packaging-solution.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/bakery-and-cake-packaging-solution.webp",
  },
  {
    file: "chocolate-packaging-solution.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/chocolate-packaging-solution.webp",
  },
  {
    file: "coffee-and-tea-packaging-solution.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/coffee-and-tea-packaging-solution.webp",
  },
  {
    file: "beverage-packaging-solution.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/beverage-packaging-solution.webp",
  },
  {
    file: "cosmetic-packaging-solution.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/cosmetic-packaging-solution.webp",
  },
  {
    file: "restaurant-packaging-solution.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/restaurant-packaging-solution.webp",
  },
  {
    file: "gift-packaging-solution.webp",
    url: "https://media.pakfactory.com/media_upload/coding_guide/gift-packaging-solution.webp",
  },
  {
    file: "review-customer-logo-1.svg",
    url: "https://media.pakfactory.com/media_upload/coding_guide/review-customer-logo-1.svg",
  },
  {
    file: "review-customer-logo-2.svg",
    url: "https://media.pakfactory.com/media_upload/coding_guide/review-customer-logo-2.svg",
  },
  {
    file: "review-customer-logo-3.svg",
    url: "https://media.pakfactory.com/media_upload/coding_guide/review-customer-logo-3.svg",
  },
  {
    file: "review-customer-logo-4.svg",
    url: "https://media.pakfactory.com/media_upload/coding_guide/review-customer-logo-4.svg",
  },
  {
    file: "review-customer-logo-5.svg",
    url: "https://media.pakfactory.com/media_upload/coding_guide/review-customer-logo-5.svg",
  },
  {
    file: "review-customer-logo-6.svg",
    url: "https://media.pakfactory.com/media_upload/coding_guide/review-customer-logo-6.svg",
  },
  {
    file: "review-customer-logo-7.svg",
    url: "https://media.pakfactory.com/media_upload/coding_guide/review-customer-logo-7.svg",
  },
  {
    file: "review-customer-logo-8.svg",
    url: "https://media.pakfactory.com/media_upload/coding_guide/review-customer-logo-8.svg",
  },
  {
    file: "review-customer-logo-9.svg",
    url: "https://media.pakfactory.com/media_upload/coding_guide/review-customer-logo-9.svg",
  },
  {
    file: "review-customer-logo-10.svg",
    url: "https://media.pakfactory.com/media_upload/coding_guide/review-customer-logo-10.svg",
  },
  {
    file: "review-customer-logo-12.svg",
    url: "https://media.pakfactory.com/media_upload/coding_guide/review-customer-logo-12.svg",
  },
  {
    file: "instagram-1.jpg",
    url: "https://media-api.flockler.com/instagram/image/3461499889240766699",
  },
  {
    file: "instagram-2.jpg",
    url: "https://media-api.flockler.com/instagram/video_cover/3392583989045348558",
  },
  {
    file: "instagram-3.jpg",
    url: "https://media-api.flockler.com/instagram/image/3225853200597832359",
  },
  {
    file: "instagram-4.jpg",
    url: "https://media-api.flockler.com/instagram/image/3170769531534467066",
  },
];

await mkdir(assetDir, { recursive: true });

const exists = async (file) => {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
};

for (const asset of assets) {
  const outputPath = path.join(assetDir, asset.file);

  if (await exists(outputPath)) {
    console.log(`skip ${asset.file}`);
    continue;
  }

  const response = await fetch(asset.url, {
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; Codex PakFactory Clone)",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to download ${asset.url}: ${response.status}`);
  }

  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(outputPath, buffer);
  console.log(`saved ${asset.file}`);
}
