// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
// function destructivelyAppendCat(name) {
//     return name.push('Ralph');
// }
const destructivelyAppendCat = function (name) {
    return cats.push(name);
}

const destructivelyPrependCat = function (name) {
    return cats.unshift(name);
}

const destructivelyRemoveLastCat = function (name) {
    return cats.pop(name);
}

const destructivelyRemoveFirstCat = function (name) {
    return cats.shift(name);
}

const appendCat = function (name) {
    return [...cats, name];
}

const prependCat = function (name) {
    return [name, ...cats];
}

const removeLastCat = function () {
    return cats.slice(0, cats.length - 1);
}

const removeFirstCat = function () {
    return cats.slice(1);
}
