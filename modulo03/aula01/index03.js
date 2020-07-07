function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y tem que ser números');
    }
    return x + y;
}

console.log(soma('8', 4));