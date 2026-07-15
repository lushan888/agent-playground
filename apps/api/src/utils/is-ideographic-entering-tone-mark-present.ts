/**
 * Utility function to detect the presence of the Unicode ideographic
 * entering tone mark (U+302D) in a given string.
 *
 * U+302D (ヽ) — "SMALL REVERSE L TONE MARK" — is a CJK ideographic
 * entering tone mark historically used in Japanese to denote the
 * historical entering tone (入声, ryūshō) in kanji reading.
 *
 * @param input - The string to check for the U+302D character.
 * @returns `true` if the string contains the ideographic entering tone
 *          mark (U+302D), `false` otherwise.
 *
 * @example
 * ```ts
 * isIdeographicEnteringToneMarkPresent("音ヽ調"); // true
 * isIdeographicEnteringToneMarkPresent("hello");   // false
 * ```
 */
export function isIdeographicEnteringToneMarkPresent(input: string): boolean {
  if (typeof input !== 'string') {
    return false;
  }

  const IDEOGRAPHIC_ENTERING_TONE_MARK = '〭'; // ヽ

  return input.includes(IDEOGRAPHIC_ENTERING_TONE_MARK);
}
