export type CharacterSet = 'alpha' | 'numeric' | 'alphanumeric' | 'alphanumericsymbols';
export type LetterCasing = 'uppercase' | 'lowercase' | 'mixed';

export type CharsetOptions = {
  charset: string;
};

export type CharacterSetOptions = {
  characterSet: CharacterSet;
  letterCasing?: LetterCasing;
} & ExcludeSimilarCharactersOptions;

export type ExcludeSimilarCharactersOptions =
  | {
      excludeDefaultSimilarChars?: boolean;
    }
  | {
      excludeSimilarChars?: string;
    };

export type ExcludeBadWordsOptions =
  | {
      excludeDefaultBadWords?: boolean;
    }
  | {
      excludeBadWords?: string[];
    };

export type RandomCodeOptions = {} | ((CharsetOptions | CharacterSetOptions) & ExcludeBadWordsOptions);
