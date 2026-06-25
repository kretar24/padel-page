/**
 * PLACEHOLDER IMAGERY — replace with real photos of Epic Padel.
 *
 * These are free-to-use Pexels photos of real padel courts and players
 * (enclosed glass courts, padel rackets) standing in for actual venue
 * photography. For the "most beautiful" result, swap each URL below for real
 * shots of your indoor courts, glass walls, lighting, rallies, and the
 * Punto Pádel CR store corner. Keep a slightly cool/blue grade so they match
 * the brand palette. Everything is centralised here so you only edit one file.
 */

const px = (id: number, w: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

// Indoor padel courts with glass partitions — best wide hero shot.
export const HERO_IMAGE = px(38155778, 1920);

// Padel player with racket and ball — action shot for the closing CTA.
export const FINAL_CTA_IMAGE = px(35646550, 1920);

/** One photo per court card. Replace with a real photo of each court. */
export const COURT_IMAGES = [
  px(38155778, 900),
  px(32897038, 900),
  px(32897040, 900),
];

/** Instagram grid placeholders. Replace with real post thumbnails or an embed. */
export const INSTAGRAM_IMAGES = [
  px(31012869, 600),
  px(35646550, 600),
  px(32897038, 600),
  px(32897040, 600),
  px(38155778, 600),
  px(32897038, 600),
];
