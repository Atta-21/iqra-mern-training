// Arrays
const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5];     
const copy = [...nums];                

// Objects
const base = { a: 1, b: 2 };
const merged = { ...base, c: 3 };       
const overridden = { ...base, b: 99 };  

// Function arguments
function sum(a, b, c) { return a + b + c; }
const args = [1, 2, 3];
sum(...args); // 6

console.log(sum(1, 2, 3)); 

//Nested objects and arrays

const user = {
  name: "Ali",
  address: {
    city: "Lahore",
    zip: "54000"
  },
  hobbies: ["reading", "gaming"]
};

console.log(user.address.city);       
console.log(user.hobbies[1]);         
//console.log(user.address?.country);   


const updatedUser = {
  ...user,
  address: { ...user.address, city: "Karachi" }
};
console.log(updatedUser.address.city);   


function isprime (num){
    if (num <=2){
        return false;
    }
    for (let i=2; i<num; i++){
        if(num%i===0){
            return false;
        }
        else{
            return true;
        }
        
}}
console.log(isprime(8));

function reversestring(str){
    return str.split("").reverse().join("");
}
console.log(reversestring("zyug oh esiaek"));

function ispalindrome(str){
    return str===reversestring(str);
}
console.log(ispalindrome("racecar"));

function factorial(n){
    let result =1;
    for(let i=1;i<=n;i++){
        result *= i;
    }

    return result;
}
console.log(factorial(6));


const scores = [80, 90, 45, 70];

scores.some(s => s < 50);   
scores.every(s => s < 50);  
console.log(scores);

console.log("--- Nested Arrays ---");
const grid = [[1,2],[3,4]];
console.log(grid[1][0]);

console.log("--- map ---");
const num = [1,2,3];
console.log(num.map(n => n*4));

console.log("--- some ---");
console.log([1,3,5,8].some(n => n%2===0));

const people = [
  { name: "Sara", age: 30 },
  { name: "Ali", age: 20 }
];

people.sort((a, b) => a.age - b.age);
console.log(people);

const names=["Sara", "Ali", "Zara"].sort();
console.log(names);


const original = [3, 1, 2];
const sortedCopy = [...original].sort((a, b) => a - b);

console.log(original);   
console.log(sortedCopy);



stack = [1, 2, 3];
stack.push(4);    
console.log("Stack:", stack);


stack.pop();
console.log("Stack after pop:", stack);


const user1 = {
  name: "Ali",
  age: 22,
  isStudent: true
}; 
console.log(user1.name);
console.log(user1["age"]);

const student = {
  name: "Sara",
  grades: [90, 85, 88],      
  address: {                
    city: "Karachi",
    zip: "75500"
  }
};

student.grades[0];       
student.address.city;    

for (const key in user) {
  console.log(key, user[key]);
}

Object.keys(user); 
Object.values(user);  
Object.entries(user); 


const user2 = { name: "Ali", age: 22, city: "Lahore" };

// Without destructuring
const name2 = user.name;
const age2 = user.age;

const { name, age } = user;


const arr2=[2,3,4];

console.log(arr2.push(5));
//arr2.pop();
console.log(arr2);
console.log(arr2.unshift(1));

console.log(arr2);
//arr2.shift();
