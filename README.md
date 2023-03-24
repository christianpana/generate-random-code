# random-code

A simple, customizable random code generator written in TypeScript. This package is ideal for 
generating non-sensitive, random codes for various purposes, such as access codes, authentication codes, 
security codes, verification codes, pin codes, coupon codes or unique identifiers.

Please note that this package is not intended for generating secure passwords. Its primary purpose
is to create random codes for non-sensitive applications. Keep in mind that collisions might happen,
particularly when using a limited character set. Users are responsible for verifying that the generated
codes are unique and collision-free.

# Installation

```bash
npm install random-code
```

# Usage

```typescript
import randomCode from 'random-code';

// Basic usage
const code = randomCode();
console.log(code); 
// Example output: "AB1C2"

// Custom length
const customLengthCode = randomCode(10);
console.log(customLengthCode); 
// Example output: "A1B2C3D4E5"

// Custom options
const options = {
  charset: 'abcdef123456',
  similarChars: 'Il1O0',
  badWords: ['badword1', 'badword2'],
  excludeSimilarChars: true,
  excludeBadWords: true,
  alphaOnly: false,
  numericOnly: false,
  alphaNumericOnly: true,
  alphaNumericWithSymbols: false,
  letterCasing: 'mixed',
};
const customOptionsCode = randomCode(10, options);
console.log(customOptionsCode); 
// Example output: "Edc47uMqah"
```

# Options
The `randomCode()` function accepts two optional parameters:

- `length?`: (number) The length of the generated code (default is 5).
- `options?`: (object) An optional object with the following properties:
  - `charset?`: (string) An optional custom character set provided by the user.
  - `similarChars?`: (string) An optional custom list of similar characters provided by the user.
  - `badWords?`: (string[]) An optional custom list of bad words provided by the user.
  - `excludeSimilarChars?`: (boolean) An optional flag to exclude similar characters (default is false).
  - `excludeBadWords?`: (boolean) An optional flag to exclude bad words (default is false).
  - `alphaOnly?`: (boolean) An optional flag to generate a code with alpha characters only.
  - `numericOnly?`: (boolean) An optional flag to generate a code with numeric characters only.
  - `alphaNumericOnly?`: (boolean) An optional flag to generate a code with alphanumeric characters only.
  - `alphaNumericWithSymbols?`: (boolean) An optional flag to generate a code with alphanumeric characters and symbols.
  - `letterCasing?`: (string) An optional value to specify the desired letter casing for the generated code. Possible values are 'uppercase', 'lowercase', and 'mixed'.

# Helpers
The following helper functions come with a predefined set of options for your convenience. 
Please note that these presets are not based on any specific standard and are provided as a starting point for your use case.

1. `generatePinCode`: Generates a numeric PIN code of the specified length (default is 4).
2. `generateAccessCode`: Creates an uppercase alphanumeric access code without similar characters or bad words (default length is 6).
3. `generateAuthCode`: Produces a numeric authentication code with the given length (default is 6).
4. `generateSecurityCode`: Generates an alphanumeric security code with mixed casing and the specified length (default is 6).
5. `generateVerificationCode`: Creates a numeric verification code without similar characters and with the given length (default is 5).
5. `generateCouponCode`: Generates an uppercase alphanumeric coupon code without bad words, with a default length of 20 characters.

```typescript
import {
    generatePinCode,
    generateAccessCode,
    generateAuthCode,
    generateSecurityCode,
    generateVerificationCode,
} from 'random-code';

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
The following characters are excluded if the `excludeSimilarChars` option is set to `true`
```
B8Il1O0S5
```
However, you can provide your own list by setting the `similarChars` option.
Alternatively, you can provide a custom character list using the `charset` option that 
doesn't include the chars you wish to avoid.

# Disclaimer
This package isn't designed for secure password generation but rather for creating 
non-sensitive random codes. Be aware that collisions can happen, and it's the 
user's responsibility to ensure code uniqueness.