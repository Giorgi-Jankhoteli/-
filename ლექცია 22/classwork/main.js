let i = 0

do {
    console.log(i)
    i++
} while (i < 11);

// ------------------------------------

const city = ["Tbilisi", "Kutaisi", "Batumi", "Mtskheta", "Gori"]

const cities = []

for (const cities of city) {
    console.log(cities)
}

// -------------------------------------

const matrix = [
    [1, 2, 3],
    [4, 5, 6]
];
matrix[0]

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j])
    }
}