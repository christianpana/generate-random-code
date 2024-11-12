import { randomCode } from '../random-code.js';

export function generatePinCode(length: number = 4): string {
  return randomCode(length, { characterSet: 'numeric' });
}

export function generateAccessCode(length: number = 6): string {
  return randomCode(length, {
    characterSet: 'alphanumeric',
    letterCasing: 'uppercase',
    excludeDefaultSimilarChars: true,
    excludeDefaultBadWords: true,
  });
}

export function generateAuthCode(length: number = 6): string {
  return randomCode(length, { characterSet: 'numeric' });
}

export function generateSecurityCode(length: number = 6): string {
  return randomCode(length, {
    characterSet: 'alphanumeric',
    letterCasing: 'mixed',
  });
}

export function generateVerificationCode(length: number = 5): string {
  return randomCode(length, {
    characterSet: 'numeric',
    excludeDefaultSimilarChars: true,
  });
}

export function generateCouponCode(length: number = 20): string {
  return randomCode(length, {
    characterSet: 'alphanumeric',
    letterCasing: 'uppercase',
    excludeDefaultBadWords: true,
  });
}
