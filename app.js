
for(let i = 1; i < 101; i++){
    let praise = i;
    if(i % 3 == 0){
        praise = "Fizz"
    }
    if(i % 5 == 0){
        praise = "Buzz"
    }
    if(i % 3 == 0 && i % 5 == 0){
        praise = "FizzBuzz"
    }
    console.log(praise)
}
