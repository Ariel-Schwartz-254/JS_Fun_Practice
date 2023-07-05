// 1) Write a function identity that takes an argument and returns that argument
const identity = (argument) => argument;

// 2) Write a binary function addb that takes two numbers and returns their sum
const addb = (a, b) => a + b;

// 3) Write a binary function subb that takes two numbers and returns their difference
const subb = (a, b) => a - b;

// 4) Write a binary function mulb that takes two numbers and returns their product
const mulb = (a, b) => a * b;

// 5) Write a binary function minb that takes two numbers and returns the smaller one
const minb = (a, b) => Math.min(a, b);

// 6) Write a binary function maxb that takes two numbers and returns the larger one
const maxb = (a, b) => Math.max(a, b);

// 7) Write a function add that is generalized for any amount of arguments
const add = (...nums) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

// 8) Write a function sub that is generalized for any amount of arguments
const sub = (...nums) => {
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sum -= nums[i];
    }
    return sum;
}

// 9) Write a function mul that is generalized for any amount of arguments
const mul = (...nums) => {
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        product *= nums[i];
    }
    return product;
}

// 9) Write a function min that is generalized for any amount of arguments
const min = (...nums) => Math.min(...nums);

// 10) Write a function max that is generalized for any amount of arguments
const max = (...nums) => Math.max(...nums);

module.exports = {
    identity,
    addb,
    subb,
    mulb,
    minb,
    maxb,
    add,
    sub,
    mul,
    min,
    max,
    // addRecurse,
    // mulRecurse,
    // minRecurse,
    // maxRecurse,
    // not,
    // acc,
    // accPartial,
    // accRecurse,
    // fill,
    // fillRecurse,
    // set,
    // identityf,
    // addf,
    // liftf,
    // pure,
    // curryb,
    // curry,
    // inc,
    // twiceUnary,
    // doubl,
    // square,
    // twice,
    // reverseb,
    // reverse,
    // composeuTwo,
    // composeu,
    // composeb,
    // composeTwo,
    // compose,
    // limitb,
    // limit,
    // genFrom,
    // genTo,
    // genFromTo,
    // elementGen,
    // element,
    // collect,
    // filter,
    // filterTail,
    // concatTwo,
    // concat,
    // concatTail,
    // gensymf,
    // gensymff,
    // fibonaccif,
    // counter,
    // revocableb,
    // revocable,
    // extract,
    // m,
    // addmTwo,
    // addm,
    // liftmbM,
    // liftmb,
    // liftm,
    // exp,
    // expn,
    // addg,
    // liftg,
    // arrayg,
    // continuizeu,
    // continuize,
    // vector,
    // exploitVector,
    // vectorSafe,
    // pubsub,
    // mapRecurse,
    // filterRecurse,
};