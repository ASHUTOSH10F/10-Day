// document.getElementById("form").addEventListener("submit", function(event) 
//     {
//     event.preventDefault(); // form ko reload hone se roke
//     let name= document.getElementById("Name").value.trim();
//     let email= document.getElementById("Email").value.trim();
//     let password = document.getElementById("Password").value.trim();


//     if(name=="")
//     {
//         alert("Name is required");
//     }
//     else if(!email.includes("@"))
//     {
//         alert("Enter a valid email");
//     }
//     else if(password.length<8)
//     {
//         alert("Password must be at least 8 characters long");
//     }
//     else
//     {
//         alert("Form submitted successfully");
//         // Here you can add code to send the form data to the server
//     }
//     });

// // Second Way //

// // document.getElementById("form").addEventListener("submit", function(event) {
// //     {
// //     // form ko reload hone se roke
// //     let name= document.getElementById("Name").value.trim();
// //     let email= document.getElementById("Email").value.trim();   
// //     let password = document.getElementById("Password").value.trim();

// //     if(name==="" || email==="" || password==="")
// //     {
// //         alert("All fields are required");
// //     }

// //     else if(!email.includes("@"))   
// //     {
// //     alert("Enter a valid email");

// //     }
// //     else{
// //         alert("Form submitted successfully");
// //         // Here you can add code to send the form data to the server
// //     }
// // }
// // })




// //--practice question--//

// let name = "John Doe";
// let age = 20;
// let isStudent = true;

// console.log(`My Name is ${name}, i am ${age} years old and it is ${isStudent} that I am a student.`);



// const marks = 100;

// if (marks >= 90) {
//     console.log("Grade A");
// }
// else if (marks >= 80) {
//     console.log("Grade B");
// }

// else if (marks >= 70) {
//     console.log("Grade C");
// }
// else{
//     console.log("Try again");
// }

// let array =["mango", "banana", "apple", "orange"];
// console.log(array[0]);
// console.log(array.length)
// console.log(array[array.length-1]);
// array.push("grapes");
// console.log(array);
// array.pop();
// console.log(array);

// function add(a,b)
// {
//     let sum = a+b;
//     console.log(sum);
// }
// add(5,10);

// let sum = (b,c) => 
// {
//     let sum = b+c;
//     console.log(sum);
// }
// sum(5,5)


// for (let i = 0; i < 10; i++) {
//     {
//         console.log(i);
//     }
// }


// let object ={
//     name: "John",
//     age: 30,
//     isStudent: true,
// }
// console.log(object.name);
// console.log(object.age);
// console.log(object.isStudent);

// let obj = {name, age, isStudent};

// console.log(name);



// let btn = document.getElementById("btn");
// btn.addEventListener("click", function() {
//     alert("Button clicked");
// });



let x = null;

console.log(typeof(x));

let y = undefined;
console.log(typeof(y));


// let z = NaN 
// console.log(typeof(z));

// let a = 10;
// {
//     let a = 20;
//     console.log(a); // 20
//         {
//     let a= 30;
//     }
//     console.log(a);
// }
// console.log(a); // 10


let student = "1"+"1"-1;
console.log(student);

