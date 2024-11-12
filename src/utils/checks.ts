import BadWordsList from 'badwords-list';

export function containsBadWords(code: string, badWords?: string[]): boolean {
  const words = badWords || BadWordsList.array;
  const lowerCaseCode = code.toLowerCase();
  return words.some((badWord: string) => lowerCaseCode.includes(badWord.toLowerCase()));
}

// Out of commission
// export function hasAlphabeticCharacters(str: string): boolean {
//     return /[a-zA-Z]/.test(str);
// }
// export function hasNumericCharacters(str: string): boolean {
//     return /\d/.test(str);
// }
