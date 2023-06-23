const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumAll(param) {
    let counter = 0;
    for (const element of param) {
        counter += element;
    }
    console.log(counter);
}
sumAll(numbers);

