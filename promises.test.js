const fetchData = require('./promises');
// const fetchDataPromiseWithErrorMessage = require('./promises');

test('promise testing', () => {
    return fetchData().then(data => {
        expect(data).toBe('Hello');
    });
});
// test('la récupération échoue avec une erreur', () => {
//     expect.assertions(1);
//     return fetchDataPromiseWithErrorMessage().catch(e => expect(e).toMatch('Hello World'));
// });
test('la donnée est Hello', () => {
    return expect(fetchData()).resolves.toBe('Hello');
});
test('la récupération échoue avec une erreur', () => {
    return expect(fetchData()).rejects.toMatch('error');
});