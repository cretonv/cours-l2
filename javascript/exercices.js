const anagrammes = (stringA, stringB) => {
    /**
     * stringA est égale à stringB si et seulement s'ils partagent les mêmes
     * caractères alphabétiques dans la même quantité.
     * La case n'est pas pris en compte
     *
     * Exemples :
     *
     * anagrams('rail safety', 'fairy tales') === true
     * anagrams('RAIL! SAFETY!', 'fairy tales') === true
     * anagrams('Hi there', 'Bye there') === false
     */
    const regex = /([A-Za-z])\w+/g
    const sortedA = stringA.split('').sort().join('').toLowerCase().match((regex) || []).join('')
    const sortedB = stringB.split('').sort().join('').toLowerCase().match((regex) || []).join('')
    return sortedA == sortedB

};


class Stack {
    /**
     * Créer une structure d'empilement. La structure doit être
     * une classe contenant les méthodes :
     *  - `push`: pour ajouter un élément au bout de l'empilement,
     *  - `pop` pour retirer le dernier élément et le retourner;
     *  - et `peek` pour récupérer le premier élément.
     *
     * Exemples :
     *
     * const s = new Stack();
     * s.push(1);
     * s.push(2);
     * s.push(3);
     * s.pop(); // returns 3
     * s.pop(); // returns 2
     * s.peek(); // returns 1
     */

    constructor() {
        this.tab = [];
    }

    push(number) {
        this.tab.push(number)
    }

    pop(){
        const indice = this.tab.length - 1
        const toReturn = this.tab[indice]
        this.tab.pop()
        return toReturn
    }

    peek() {
        return this.tab[0]
    }
};


const fizzBuzz = (n) => {
    /**
     * Affiche les nombres de 1 à n, en remplaçant les multiples de 3 par fizz et
     * les multiples de 5 par buzz
     *
     * Exemple :
     *
     * fizzBuzz(5);
     * console.log(1)
     * console.log(2)
     * console.log('fizz')
     * console.log(4)
     * console.log('buzz')
     */

    for(var i = 1; i <= n; i++){
        let res = ''
        if(i % 3 === 0){
            res += 'fizz'
        }
        if (i % 5 === 0){
            res += 'buzz'
        }
        let res_finale = res? res : i
        console.log(res_finale)
    }
};

const spirale = (n) => {
    /**
     * Retourne une matrice spirale de taille n x n.
     *
     * Exemples :
     *
     * matrix(2) = [[1, 2],
     *              [4, 3]]
     *
     * matrix(3) = [[1, 2, 3],
     *              [8, 9, 4],
     *              [7, 6, 5]]
     *
     * matrix(4) = [[1,   2,  3, 4],
     *              [12, 13, 14, 5],
     *              [11, 16, 15, 6],
     *              [10,  9,  8, 7]]
     */
    const results = [];
    for (let i = 0; i < n; i++) {
        results.push([]);
    }
    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;
    while (startColumn <= endColumn && startRow <= endRow) {
        // Top row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;
// Right column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;
// Bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;
// start column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }
    return results;
};


const puissance4 = (grid) => {
    /**
     * Vérifie si un joueur a gagné au puissance 4,
     * c'est-à-dire s'il a 4 jetons contigus en diagonales, lignes ou colonnes.
     *
     * Exemples :
     *
     * puissance4(
     *  [[ 2, 0, 0, 0 ],
     *   [ 2, 1, 0, 0 ],
     *   [ 2, 1, 1, 2 ],
     *   [ 2, 1, 1, 2 ]]
     *   ) = 1
     * )
     *
     * puissance4(
     *  [[ 1, 1, 0, 0, 0 ],
     *   [ 2, 2, 2, 0, 0 ],
     *   [ 2, 2, 1, 1, 2 ],
     *   [ 2, 2, 1, 1, 2 ]]
     *   ) = 0
     *
     * puissance4(
     *  [[ 1, 2, 0, 0, 0 ],
     *   [ 1, 2, 2, 0, 0 ],
     *   [ 2, 2, 1, 1, 2 ],
     *   [ 2, 2, 1, 1, 2 ]]
     *   ) = 0
     */
    let found = 0
    const checkVictory = (array)=> {
        if (array.join('').includes('1111')) return 1
        if (array.join('').includes('2222')) return 2
        return 0
    }

    grid.forEach((row, y)=>{
        if(!found){
            found = checkVictory(row)
        }
    })

    grid[0].forEach((col, x)=>{
        if(!found){
            let col = []
            grid.forEach((row) => {
                col.push(row[x])
            })
            found = checkVictory(col)
        }
    })
    return found
}

module.exports = {
    fizzBuzz,
    puissance4,
    spirale,
    anagrammes,
    Stack
}
