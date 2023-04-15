function fib() {
    var a = 0;
    var b = 1;
    
    return function fibTwo() {
        [ a, b] = [ b, a + b];
        return a;
    };
}

var fun = fib();


for (let i = 0; i <5 ; i++) {
    console.log(fun());
}
    

