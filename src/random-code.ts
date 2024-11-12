import { RandomCodeOptions } from './types/index.js';
import { applyCharacterOptions, getBadWordsList } from './utils/charset.js';
import { containsBadWords } from './utils/checks.js';
import InfiniteLoopError from './errors/InfiniteLoopError.js';

export const generateCode = (length: number, charset: string): string => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset[Math.floor(Math.random() * charset.length)];
  }
  return result;
};

export function generateRandomCode(length: number = 8, options: RandomCodeOptions = {}, tries: number = 1): string {
  if (tries > 10) {
    throw new InfiniteLoopError(`Can't generate a valid code`);
  }

  const charset = applyCharacterOptions(options);
  const badWordsList = getBadWordsList(options);

  let code = generateCode(length, charset);

  if (badWordsList.length > 0 && containsBadWords(code, badWordsList)) {
    return generateRandomCode(length, options, ++tries);
  }

  return code;
}

export function randomCode(length: number = 8, options: RandomCodeOptions = {}): string {
  return generateRandomCode(length, options);
}
