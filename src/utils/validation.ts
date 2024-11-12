import { z } from 'zod';

export const randomCodeOptionsSchema = z.object({
  charset: z.string().optional(),
  similarChars: z.string().optional(),
  badWords: z.array(z.string()).optional(),
  excludeSimilarChars: z.boolean().optional(),
  excludeBadWords: z.boolean().optional(),
  characterSet: z.enum(['alpha', 'numeric', 'alphanumeric', 'alphanumericWithSymbols']).optional(),
  letterCasing: z.enum(['uppercase', 'lowercase', 'mixed']).optional(),
});

export const randomCodeSchema = z.object({
  length: z.number().int().positive().default(5),
  options: randomCodeOptionsSchema.optional(),
});
