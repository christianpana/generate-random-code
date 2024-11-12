import { CharacterSet, LetterCasing, RandomCodeOptions } from '../types/index.js';
import BadWordsList from 'badwords-list';

export const DEFAULT_SIMILAR_CHARS = 'B8Il1O0S5' as const;

export function getLetterCasingChars(letterCasing: LetterCasing): string {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';

  if (letterCasing === 'lowercase') {
    return alpha;
  } else if (letterCasing === 'uppercase') {
    return alpha.toUpperCase();
  } else if (letterCasing === 'mixed') {
    return `${alpha.toUpperCase()}${alpha}`;
  }

  return alpha;
}

export function getDefaultCharset(
  characterSet: CharacterSet = 'alphanumeric',
  letterCasing: LetterCasing = 'mixed',
): string {
  const alpha = getLetterCasingChars(letterCasing);
  const numeric = '0123456789';
  const symbols = '!@#$%^&*()-=_+{}[]|;:,.<>?';

  switch (characterSet) {
    case 'alpha':
      return alpha;
    case 'numeric':
      return numeric;
    case 'alphanumeric':
      return `${alpha}${numeric}`;
    case 'alphanumericsymbols':
      return `${alpha}${numeric}${symbols}`;
    default:
      return `${alpha}${numeric}`;
  }
}

export function removeSimilarCharacters(charset: string, similarChars: string): string {
  return [...charset].filter((char) => !similarChars.includes(char)).join('');
}

export function applyCharacterOptions(options: RandomCodeOptions): string {
  let charset;

  if ('charset' in options) {
    charset = options?.charset;
  } else if ('characterSet' in options) {
    charset = getDefaultCharset(options.characterSet);
  } else {
    charset = getDefaultCharset();
  }

  if ('excludeDefaultSimilarChars' in options) {
    charset = removeSimilarCharacters(charset, DEFAULT_SIMILAR_CHARS);
  } else if ('excludeSimilarChars' in options && options.excludeSimilarChars) {
    charset = removeSimilarCharacters(charset, options.excludeSimilarChars);
  }

  return charset;
}

export function getBadWordsList(options: RandomCodeOptions): string[] {
  if ('excludeDefaultBadWords' in options && options?.excludeDefaultBadWords) {
    return BadWordsList.array;
  } else if ('excludeBadWords' in options && options.excludeBadWords) {
    return options.excludeBadWords;
  }

  return [];
}
