export type RandomCodeOptions = {
    charset?: string;
    similarChars?: string;
    badWords?: string[];
    excludeSimilarChars?: boolean;
    excludeBadWords?: boolean;
    alphaOnly?: boolean;
    numericOnly?: boolean;
    alphaNumericOnly?: boolean;
    alphaNumericWithSymbols?: boolean;
    letterCasing?: string;
};