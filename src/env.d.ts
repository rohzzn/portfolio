/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../.astro/types.d.ts" />
/// <reference path="astro/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * - `https://localhost:3000/` in development
   * - `https://${branch-name}--rohan.fun/` in preview
   * - `https://rohan.fun/` in production
   *
   * @see import.meta.env.SITE for the canonical URL
   */
  readonly PUBLIC_URL: string;
}
