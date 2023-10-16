let m = "mississippi"

// STEP 1

let countI = 0;

for (let i = 0; i < m.length; i++) {
    if (m[i] === 'i') {
        countI++;
    }
}

console.log("Le nombre d'occurrences de 'i' est : " + countI);

// STEP 2 

let counts = {};

for (let i = 0; i < m.length; i++) {
    let char = m[i];
    if (counts[char]) {
        counts[char]++;
    } else {
        counts[char] = 1;
    }
}

console.log("Comptage des lettres :");
for (let char in counts) {
    console.log(char + ": " + counts[char]);
}