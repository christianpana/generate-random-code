import {
  generatePinCode,
  generateAccessCode,
  generateAuthCode,
  generateSecurityCode,
  generateVerificationCode,
  generateCouponCode,
} from '../src/index.js';

console.log('-----------------------------');
console.log('Helper functions');
console.log('-----------------------------');
console.log('\n');

console.log('generatePinCode examples:');
console.log(generatePinCode()); // Example output: "1249"
console.log(generatePinCode()); // Example output: "3556"
console.log(generatePinCode()); // Example output: "8343"
console.log('\n');

console.log('generateAccessCode examples:');
console.log(generateAccessCode()); // Example output: "X42RPK"
console.log(generateAccessCode()); // Example output: "73IDIG"
console.log(generateAccessCode()); // Example output: "BN929F"
console.log('\n');

console.log('generateAuthCode examples:');
console.log(generateAuthCode()); // Example output: "321204"
console.log(generateAuthCode()); // Example output: "193928"
console.log(generateAuthCode()); // Example output: "903528"
console.log('\n');

console.log('generateSecurityCode examples:');
console.log(generateSecurityCode()); // Example output: "DYYs1V"
console.log(generateSecurityCode()); // Example output: "6s5KPb"
console.log(generateSecurityCode()); // Example output: "o1Q3XC"
console.log('\n');

console.log('generateVerificationCode examples:');
console.log(generateVerificationCode()); // Example output: "76336"
console.log(generateVerificationCode()); // Example output: "43633"
console.log(generateVerificationCode()); // Example output: "67647"
console.log('\n');

console.log('generateCouponCode examples:');
console.log(generateCouponCode()); // Example output: "LR68LIF1ES0XB96NM1DZ"
console.log(generateCouponCode()); // Example output: "GGNOETNYXFWLXDZW1AS1"
console.log(generateCouponCode()); // Example output: "0H8E3PCRI4E6DHNL9D35"
console.log('\n');
