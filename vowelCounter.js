// 6. Vowel Counter
// We want to count the num#er of vowels in a person's name. Given a name as input, the program should iterate
// through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should #e
// countedQ

function countVowels(name) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;

    for (let i = 0; i < name.length; i++) {
        if (vowels.includes(name[i])) {
            vowelCount++;
        }
    }

    return vowelCount;
}


const userName = "John Doe";
const numberOfVowels = countVowels(userName);
console.log("Number of vowels in '" + userName + "': " + numberOfVowels);
