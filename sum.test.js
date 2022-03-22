const sum = require('./sum')

//Additions
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

//COMPARAISON ATTENDUES
//toBe(x) === COMPARATEUR
test('deux plus deux font quatre', () => {
    expect(2 + 2).toBe(4);
});

//CHECK VALEUR OBJET
//toEqual({par1: val, par2: val});
test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});

test('l\'addition de nombres positifs n\'est pas égale à zéro', () => {
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            expect(i + j).not.toBe(0);
        }
    }
});


test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});
test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});
// toBeNull correspond uniquement à null
// toBeUndefined correspond uniquement à undefined
// toBeDefined est le contraire de toBeUndefined
// toBeTruthy correspond à tout ce qu'une instruction if traite comme vrai
// toBeFalsy correspond à tout ce qu'une instruction if traite comme faux