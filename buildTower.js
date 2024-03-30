// function buildTower(n) {
//     let tower = [];
//     for (let i = 0; i < n; i++) {
//         let spaces = ' '.repeat(n - i - 1);
//         let stars = '*'.repeat((i * 2)+ 1);
//         tower.push(spaces + stars + spaces);
//     }
//     return tower;
// // }
// console.log(buildTower(3));

function buildTower(nFloors) {
    let tower = [];
    for (let i = 0; i < nFloors; i++) {
        tower.push(" ".repeat(nFloors - i - 1)
            + "*".repeat(i * 2 + 1)
            + " ".repeat(nFloors - i - 1));
    }
    return tower;
}
console.log(buildTower(5));