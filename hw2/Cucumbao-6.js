function totalLandPerimeter(arr) {
    if (!arr || arr.length === 0) {
        return "Total land perimeter: 0";
    }

    const rows = arr.length;
    const cols = arr[0].length;
    let perimeter = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (arr[i][j] === 'X') {
                perimeter += 4;
                if (i > 0 && arr[i - 1][j] === 'X') {
                    perimeter -= 1;
                }
                if (i < rows - 1 && arr[i + 1][j] === 'X') {
                    perimeter -= 1;
                }
                if (j > 0 && arr[i][j - 1] === 'X') {
                    perimeter -= 1;
                }
                if (j < cols - 1 && arr[i][j + 1] === 'X') {
                    perimeter -= 1;
                }
            }
        }
    }
    return `Total land perimeter: ${perimeter}`;
}
let arr1 = ['XOOXO',
    'XOOXO',
    'OOOXO',
    'XXOXO',
    'OXOOO']
console.log(totalLandPerimeter(arr1))
let arr2=['XOOO',
    'XOXO',
    'XOXO',
    'OOXX',
    'OOOO']
console.log(totalLandPerimeter(arr2))