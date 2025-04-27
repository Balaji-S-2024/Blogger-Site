/*

Install TypeScript globally using npm:
    npm install -g typescript
To compile the TypeScript file to JavaScript
    tsc filename.ts
Install ts-node-dev globally using npm:
    npm install -g ts-node-dev
Create tsconfig.json file in the root directory of your project using the command:
    tsc --init
To run the TypeScript file using
    ts-node-dev --respawn --transpile-only filename.ts



*/

// number – for all numbers (int/float)

// string – for text

// boolean – for true/false

// any – disables type checking (avoid unless necessary)

// unknown – safer alternative to any

// void – for functions that do not return a value

// null – for null values

// undefined – for uninitialized variables

// object – for objects (not primitive values)

// array – for arrays (e.g., number[], string[])

// tuple – for fixed-length arrays with specific types (e.g., [string, number])

// Number
let numb: number = 10;
console.log("This is Number type " + numb);

// String
var str: string = "This is a string";
console.log("This is String  type " + str);

// Boolean
let bool: boolean = true;
console.log("This is Boolean type " + bool);

// Array
let arr:number[] = [1, 2, 3, 4, 5];
console.log("This is Array type " + arr);
console.log("We couldn't use arr[0] = 'a' because it is a number array");

// Object
let obj: { name: string, age: number } = { name: "John", age: 25 }; // object with name and age properties
console.log("This is Object type " + obj);
console.log("We couldn't use obj.name = 10 because it is a string and number object");
// obj.address = "123 Main St";
console.log("We couldn't use obj.address = '123 Main St' because it is not defined in the object type");
// 1
// if we want to add new attribute in object we can declare objtype with attubutewith "?"
let obj2: { name: string, age: number, address?: string } = { name: "John", age: 25 }; // object with name and age properties
// 2
// if we want to add address we can use object type as any or unknown
let obj3: any = { name: "John", age: 25 }; // object with name and age properties
obj3.address = "123 Main St"; // now we can add address property


// Tuple
let tuple: [string, number] = ["John", 25]; // string and number
console.log("This is Tuple type " + tuple);
console.log("We couldn't use tuple[0] = 10 because it is a string and number tuple");



// Any
let anyType: any = "This can be anything";
console.log("This is Any type " + anyType);
anyType = 10; // can be a number now
console.log("This is Any type " + anyType);
anyType = true; // can be a boolean now
console.log("This is Any type " + anyType);
anyType = { name: "John" }; // can be an object now
console.log("This is Any type ");
console.log(anyType);
anyType = [1, 2, 3]; // can be an array now
console.log("This is Any type " + anyType);
anyType = () => { console.log("This is a function"); }; // can be a function now
console.log("This is Any type " + anyType);
console.log(typeof (typeof anyType));

console.log("========");

// We can use this or that type
let thisOrThat: string | number = "This can be a string or a number";
thisOrThat = 20; // now it's a number

console.log(typeof str);
console.log(typeof(str));
 
console.log("To find type of a variable - user typeof keyword/function -" + typeof str)