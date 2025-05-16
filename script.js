

function test () {
    let a = "3";
    let b = "8";

    let c = a ;
        b = a;
        a = c;
    console.log("a is" + a);
    console.log("b is" + b);
}


let user  = "AngelaMartins";

console.log (user.length);


let aboutUs = prompt("Tell us about your self: ").slice(0,100);

let first_char = aboutUs.slice(0,1).toLocaleUpperCase();
let other_char = aboutUs.slice(1, aboutUs.length);


alert(first_char + other_char); 
let word_count = aboutUs.length;
console.log(word_count);

alert("You have written " + word_count + " Characters, " + "You have " + (100 - word_count )+ " Remaining, ");






//        Dog age to human age 


function human_age (x) {
    age = (x - 2)  * 4 + 21 
    alert("Your dog is " + age + " years old");
}

human_age(7);




for (let i = 2 ; i <= 100; i++){
    if (i % 2 === 0){
      continue;
    }else{
      console.log(i);
    }
  }


// .....................Recursions.....................

  function sumArray(arr) {
    if (arr.length === 0) {
      return 0; // Base case
    } else {
      return arr[0] + sumArray(arr.slice(1)); // Recursive case
    }
  }
  
  console.log(sumArray([1, 2, 3, 4]));

  


  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1; // Base case
    } else {
      return n * factorial(n - 1); // Recursive case
    }
  }
  
  console.log(factorial(5));