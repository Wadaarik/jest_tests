const fetchData = require('./asyncAwait');

//ASYNC AWAIT
test('la donnée est peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});

test('la récupération échoue avec une erreur', async () => {
    expect.assertions(1);
    try {
        await fetchData();
    } catch (e) {
        expect(e).toMatch('error');
    }
});

//ASYNC AWAIT + RESOLVE RETURN
test('la donnée est peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
});

test('la récupération échoue avec une erreur', async () => {
    await expect(fetchData()).rejects.toMatch('error');
});