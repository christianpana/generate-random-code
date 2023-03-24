import {RandomCodeOptions} from "../types/random-code.js";
import BadWordsList from 'badwords-list';
import InfiniteLoopError from "./InfiniteLoopError.js";

export const DEFAULT_SIMILAR_CHARS = 'B8Il1O0S5';

export const removeSimilarChars = (charset: string, similarChars: string): string => {
    return charset.split('').filter((char) => !similarChars.includes(char)).join('');
};

export const applyOptions = (charset: string, options?: RandomCodeOptions): string => {
    if (options?.alphaOnly) {
        charset = 'abcdefghijklmnopqrstuvwxyz';
    } else if (options?.numericOnly) {
        charset = '0123456789';
    } else if (options?.alphaNumericOnly) {
        charset = 'abcdefghijklmnopqrstuvwxyz0123456789';
    } else if (options?.alphaNumericWithSymbols) {
        charset = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-=_+{}[]|;:,.<>?';
    }

    if (options?.excludeSimilarChars) {
        charset = removeSimilarChars(charset, options.similarChars || DEFAULT_SIMILAR_CHARS);
    }

    return charset;
};

export const checkForBadWords = (code: string, badWords?: string[]): boolean => {
    if (!badWords) return false;
    return badWords.some((badWord) => code.toLowerCase().includes(badWord.toLowerCase()));
};

export const applyLetterCasing = (code: string, letterCasing?: string): string => {
    if (letterCasing === 'uppercase') {
        return code.toUpperCase();
    } else if (letterCasing === 'lowercase') {
        return code.toLowerCase();
    } else if (letterCasing === 'mixed') {
        return code.split('').map((char) => (Math.random() < 0.5 ? char.toUpperCase() : char.toLowerCase())).join('');
    }
    return code;
};

export const hasAlpha = (str: string): boolean => /[a-zA-Z]/.test(str);

export const hasNumeric = (str: string): boolean => /\d/.test(str);

export const generateCode = (length: number, charset: string): string => {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += charset[Math.floor(Math.random() * charset.length)];
    }
    return result;
};

export const randomCode = (length: number = 5, options?: RandomCodeOptions): string => {
    let characterSet = options?.charset || 'abcdefghijklmnopqrstuvwxyz0123456789';
    characterSet = applyOptions(characterSet, options);
    const badWords = options?.badWords || BadWordsList['array'] || [];

    let count = 0;
    let code = '';
    do {
        code = generateCode(length, characterSet);
        count++;
    } while (
        (
            ((!options?.alphaOnly && !options?.numericOnly && !options?.charset) && (!hasAlpha(code) || !hasNumeric(code))) ||
            (options?.excludeBadWords && checkForBadWords(code, badWords))
        )
        &&
        (
            count < 16
        )
    );

    if (count >= 16) {
        throw new InfiniteLoopError("Possible infinite loop")
    }

    code = applyLetterCasing(code, options?.letterCasing);
    return code
}
