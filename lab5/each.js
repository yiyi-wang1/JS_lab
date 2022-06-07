each((val, index) => {
    console.log(`${index} is ${val}`);
}, [1, 2, 3, 4, 5]);

function each(callback, array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        callback(element, index);
    }
}

