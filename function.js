// // let n = Math.random();
// // n = n*6
// // dice_num = Math.floor(n) + 1
// // console.log(dice_num);




// // // ---------------love calculator---------------

// // prompt ("What is your name?");
// // prompt ("Wha is their? ");

// // let lovescore = Math.random() * 100;
// //     lovescore = Math.floor (lovescore) + 1;
// //     alert ("Your love score is " + lovescore +"%" );
     

// // a = 1;
// // b = "1";

// // if (lovescore > 80) {
// //     alert ("Yes, this is love");
// // }if (lovescore < 30) {
// //     alert ("No, this is ridiculous");
// // }else{
// //     alert ("Keep trying");
// // }


// // // ----------check if year is a Leap year-------------


// // let Yer = prompt ("Enter Year to Check if it is a Leap year");


// // function Leap (year) {
// //     if (year % 4 === 0) {
// //         if (year % 100 === 0) {
// //             if (year % 400 === 0) {
// //                 alert ("The year " + year + " is a leap year.");
// //             }
    
// //         } else{
// //             alert ("The year " + year + " is a leap year.");
// //         }
    
// //     }else{
// //         alert ("The year " + year + " is not a leap year.");
// //     }
// // }

// // Leap ();

  
// // -------------ARREYS-----------------

// // let fav_fruit = prompt ("What is your favorite fruits?");
// //     fav_f = fav_fruit.slice(0,1).toLocaleUpperCase();

// //     fav = fav_fruit.slice(1,fav_fruit.length).toLocaleLowerCase();
// //     fruit = (fav_f+fav)

// // let fruits = ["Apple", "Pineapple","Watermelon", "Kiwi", "Avocado"];

// // if (fruits.includes(fruit)) {
// //     alert("Healthy");;
// // }else{
// //     alert("Not Healthy");
// // }


// // ----------------FIZZ - BUZZ----------------------
 


// // function FizzBuzz() {
// //     for (let i=1 ;i <=100; i++) {
// //         if (i % 15 === 0) {
// //             console.log("FizzBuzz");
// //         }else if (i % 3 === 0) {
// //             console.log("Fizz");
// //         }else if (i % 5 === 0) {
// //             console.log("Buzz");
// //         }else{
// //             console.log(i); 
// //         }
// //     }

// // }
// // FizzBuzz()



// user = {
//     name: "John",
//     surname: "Smith",
// }


// function isEmpty (person) {
//     if (person.length === 0){
//         console.log(true); 
//     }else{
//         console.log(false); 
//     } 
// }
// isEmpty(user);



// // we have an object salaries


// // Write a function that takes this object and returns the sum of all salaries

// function TotalSalary(a) {
//     let sum = 0;
//     for (let key in a) {
//       sum += a[key];
//     }
//     return sum;
//   }

//   let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//    }

//    console.log(TotalSalary(salaries)); 

   
// // Write another function that multiplies all salaries by 3 and returns the new object


// function multiSalaries(b) {
//     let newSalaries = {};
  
//     for (let key in b) {
//       if (b.hasOwnProperty(key)) {
//         newSalaries[key] = b[key] * 3;
//       }
//     }
//     return newSalaries;
//   } 
  
//   console.log(multiSalaries(salaries)); 