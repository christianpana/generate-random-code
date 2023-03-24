import {randomCode} from "./random-code.js";

export const generatePinCode = (length: number = 4): string => {
    return randomCode(length, {
        numericOnly: true,
    });
}

export const generateAccessCode = (length: number = 6): string => {
    return randomCode(length, {
        excludeSimilarChars: true,
        excludeBadWords: true,
        alphaNumericOnly: true,
        letterCasing: 'uppercase',
    });
}

export const generateAuthCode = (length: number = 6): string => {
    return randomCode(length, {
        numericOnly: true,
    });
}

export const generateSecurityCode = (length: number = 6): string => {
    return randomCode(length, {
        letterCasing: 'mixed',
    });
}

export const generateVerificationCode = (length: number = 5): string => {
    return randomCode(length, {
        excludeSimilarChars: true,
        numericOnly: true,
    });
}

export const generateCouponCode = (length: number = 20): string => {
    return randomCode(length, {
        alphaNumericOnly: true,
        excludeBadWords: true,
        letterCasing: 'uppercase',
    });
}
