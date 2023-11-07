const input = ["tsar", "rat", "tar", "star", "tars", "cheese"];
function groupAnagrams(words) {
    const anagramGroups = {};
    for (const word of words) {
        const sortedWord = word.split('').sort().join('');
        if (!anagramGroups[sortedWord]) {
            anagramGroups[sortedWord] = [];
        }
        anagramGroups[sortedWord].push(word);
    }
    const result = Object.values(anagramGroups);

    return result;
}
const output = groupAnagrams(input);
console.log(output);