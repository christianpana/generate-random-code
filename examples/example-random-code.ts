import { randomCode, InfiniteLoopError} from '../src/index.js';

console.log('-----------------------------')
console.log('ramdomCode');
console.log('-----------------------------')
console.log('\n')

console.log('randomCode example 1:');
console.log(
    randomCode(8, {
        alphaNumericOnly: true,
        letterCasing: 'lowercase',
    })
); // Example output: "pdebif57"
console.log('\n')

console.log('randomCode example 2:');
console.log(
    randomCode(6, {
        alphaOnly: true,
        letterCasing: 'mixed',
    })
); // Example output: "PAPPqb"
console.log('\n')

console.log('randomCode example 3:');
console.log(
    randomCode(10, {
        charset: 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz123456789',
        excludeBadWords: true,
    })
); // Example output: "T59vsM3CNd"
console.log('\n')

console.log('randomCode example 4:');
console.log(
    randomCode(6, {
        numericOnly: true,
        excludeSimilarChars: true,
    })
); // Example output: "246327"
console.log('\n')

console.log('randomCode example 5:');
console.log(
    randomCode(8, {
        alphaNumericWithSymbols: true,
        letterCasing: 'uppercase',
    })
); // Example output: "?4(G]X*]"
console.log('\n')

console.log('randomCode example 6:');
console.log(
    randomCode(12, {
        charset: 'ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghjkmnopqrstuvwxyz!@#$%&*',
        letterCasing: 'mixed',
    })
); // Example output: "FVUKHacFJtcK"
console.log('\n')

console.log('randomCode example 7:');
console.log(
    randomCode(4, {
        alphaOnly: true,
        letterCasing: 'uppercase',
    })
); // Example output: "ZXXD"
console.log('\n')

console.log('randomCode example 8:');
console.log(
    randomCode(7, {
        charset: 'ABCDEF0123456789',
        letterCasing: 'uppercase',
    })
); // Example output: "80E9355"
console.log('\n')

console.log('randomCode example 9:');
console.log(
    randomCode(5, {
        excludeSimilarChars: true,
        excludeBadWords: true,
        alphaNumericOnly: true,
        letterCasing: 'lowercase',
    })
); // Example output: "s7jdd"
console.log('\n')

console.log('randomCode example 10:');
console.log(
    randomCode(10, {
        badWords: ["BADWORD1", "badword2"],
        excludeBadWords: true,
    })
); // Example output: "3iw5kywtaa"
console.log('\n')

console.log('randomCode example 11:');
console.log(
    randomCode(20, {
        charset: 'HA',
        letterCasing: 'mixed',
    })
); // Example output: "hHHaahAHhHhHaahahhha" :)
console.log('\n')

console.log('randomCode example 12 - potential infinite loop:');
try {
    console.log(
        randomCode(50, {
            charset: 'as',
            excludeBadWords: true,
            letterCasing: 'lowercase',
        })
    );
} catch (err) {
    if (err instanceof InfiniteLoopError) {
        console.log('We had a possible infinite loop')
    } else {
        console.log('Something definitely went wrong ...')
    }
}
// Example output: We had a possible infinite loop
console.log('\n')