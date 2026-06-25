"use client";

import { MotionConfig } from "framer-motion";

/**
 * Wraps the app so every Framer Motion animation honours the user's
 * `prefers-reduced-motion` setting. With `reducedMotion="user"`, transform
 * animations (x/y/scale) are skipped while opacity still fades, so the page
 * stays calm for motion-sensitive users without disappearing content.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
