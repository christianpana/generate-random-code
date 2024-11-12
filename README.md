# generate-random-code

A simple, customizable random code generator written in TypeScript. This package is ideal for generating non-sensitive, random codes for various purposes, such as access codes, authentication codes, security codes, verification codes, pin codes, coupon codes, or unique identifiers.

Please note that this package is not intended for generating secure passwords. Its primary purpose is to create random codes for non-sensitive applications. Keep in mind that collisions might happen, particularly when using a limited character set. Users are responsible for verifying that the generated codes are unique and collision-free.

# Demo

https://codesandbox.io/p/sandbox/generate-random-code-example-3m1pll

# Installation

```bash
npm install generate-random-code
```

# Usage

```typescript
import randomCode from 'generate-random-code';

// Basic usage
const code = randomCode();
console.log(code);
// Example output: "fGxjPbwG"

// Custom length
const customLengthCode = randomCode(10);
console.log(customLengthCode);
// Example output: "A1B2C3D4E5"

// Custom options
const options = {
  characterSet: 'alphanumeric',
  letterCasing: 'mixed',
  excludeDefaultSimilarChars: true,
  excludeDefaultBadWords: true,
};
const customOptionsCode = randomCode(10, options);
console.log(customOptionsCode);
// Example output: "Edc47uMqah"
```

# Options

The randomCode() function accepts two optional parameters:
- `length`?: (number) The length of the generated code (default is 8).
- `options`?: (object) An optional object with the following properties:
  - `charset`?: (string) An optional custom character set provided by the user. If charset is provided, it overrides characterSet.
  - `characterSet`?: (string) An optional predefined character set to use. Possible values are 'alpha', 'numeric', 'alphanumeric', and 'alphanumericsymbols'.
  - `letterCasing`?: (string) An optional value to specify the desired letter casing for the generated code. Possible values are 'uppercase', 'lowercase', and 'mixed'.
  - `excludeDefaultSimilarChars`?: (boolean) An optional flag to exclude the default similar characters (default is false).
  - `excludeSimilarChars`?: (string) An optional string of characters to exclude as similar characters.
  - `excludeDefaultBadWords`?: (boolean) An optional flag to exclude the default bad words (default is false).
  - `excludeBadWords`?: (string[]) An optional array of bad words to exclude.

Notes:
- If `charset` is provided, it takes precedence over `characterSet`.
- Use `excludeDefaultSimilarChars` to exclude the default set of similar characters, or provide your own set using `excludeSimilarChars`.
- Use `excludeDefaultBadWords` to exclude the default list of bad words, or provide your own list using `excludeBadWords`.

# Helpers

The following helper functions come with a predefined set of options for your convenience.
Please note that these presets are not based on any specific standard and are provided as a starting point for your use case.

1. `generatePinCode`: Generates a numeric PIN code of the specified length (default is 4).
2. `generateAccessCode`: Creates an uppercase alphanumeric access code without similar characters or bad words (default length is 6).
3. `generateAuthCode`: Produces a numeric authentication code with the given length (default is 6).
4. `generateSecurityCode`: Generates an alphanumeric security code with mixed casing and the specified length (default is 6).
5. `generateVerificationCode`: Creates a numeric verification code without similar characters and with the given length (default is 5).
6. `generateCouponCode`: Generates an uppercase alphanumeric coupon code without bad words, with a default length of 20 characters.

```typescript
import {
  generatePinCode,
  generateAccessCode,
  generateAuthCode,
  generateSecurityCode,
  generateVerificationCode,
  generateCouponCode,
} from 'generate-random-code';

console.log('generatePinCode examples:');
console.log(generatePinCode()); // Example output: "1249"
console.log(generatePinCode()); // Example output: "3556"
console.log(generatePinCode()); // Example output: "8343"

console.log('generateAccessCode examples:');
console.log(generateAccessCode()); // Example output: "X42RPK"
console.log(generateAccessCode()); // Example output: "73IDIG"
console.log(generateAccessCode()); // Example output: "BN929F"

console.log('generateAuthCode examples:');
console.log(generateAuthCode()); // Example output: "321204"
console.log(generateAuthCode()); // Example output: "193928"
console.log(generateAuthCode()); // Example output: "903528"

console.log('generateSecurityCode examples:');
console.log(generateSecurityCode()); // Example output: "DYYs1V"
console.log(generateSecurityCode()); // Example output: "6s5KPb"
console.log(generateSecurityCode()); // Example output: "o1Q3XC"

console.log('generateVerificationCode examples:');
console.log(generateVerificationCode()); // Example output: "76336"
console.log(generateVerificationCode()); // Example output: "43633"
console.log(generateVerificationCode()); // Example output: "67647"

console.log('generateCouponCode examples:');
console.log(generateCouponCode()); // Example output: "LR68LIF1ES0XB96NM1DZ"
console.log(generateCouponCode()); // Example output: "GGNOETNYXFWLXDZW1AS1"
console.log(generateCouponCode()); // Example output: "0H8E3PCRI4E6DHNL9D35"

```

# Default similar chars

The default set of similar characters that can be excluded when using the `excludeDefaultSimilarChars` option is:

```
B8Il1O0S5
```

Alternatively, you can provide your own list of similar characters to exclude by setting the `excludeSimilarChars` option.
You can also set a custom `charset` that doesn't include certain characters.

# Default bad words

When the `excludeDefaultBadWords` option is set to true, a default list of bad words will be excluded from the generated code. You can also provide your own list of bad words to exclude by using the `excludeBadWords` option.

# Disclaimer

This package isn't designed for secure password generation but rather for creating non-sensitive random codes. Be aware that collisions can happen, and it's the user's responsibility to ensure code uniqueness.
