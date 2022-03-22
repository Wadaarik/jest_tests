const fetchData = require('./callbacks');


// test('la donnée est peanut butter', () => {
//     function callback(data) {
//         expect(data).toBe('peanut butter');
//     }
//     fetchData(callback);
// });

//CALLBACKS PARAMS
test('test callback func', done => {
    function callback(data) {
        try {
            expect(data).toBe('Hello');
            done();
        } catch (error) {
            done(error);
        }
    }
    function callback2(data) {
        try {
            expect(data).toBe('World');
            done();
        } catch (error) {
            done(error);
        }
    }

    fetchData(callback);
});