
// - Write a program that uses a while loop to print the first 10 even numbers.
var a:number=0;
while(a<=10)
{
    if(a % 2 == 0)
    {
        console.log(a)
    }
    a = a +1;
}


// - Write a program that uses a while loop to print the first 25 integers.
var a:number=1;
while(a<=25)
    {
        console.log("First 25 intehers is ",a)
        a = a + 1 ;
        
    }





// // Create a new array to store positive numbers
var positiveNumbers: number[] = [];
var b:number[]=[2,3,-5,7,-67,-34,23,54,67,-23];
var positiveNumber:number[]=[]
for (var i=0 ;i<b.length ; i++)
{
if (b[i]>0)
{
    positiveNumber.push(b[i]);
}
}
console.log(positiveNumber);









//Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array ?

function add1(arr:number[],index:number, value:number)
{
    arr.splice(index, 0, value);
    return arr;
}
 var Original:number[]=[2,4,6,3,8]
 add1(Original,2,32);
 console.log(Original);









// Implement a simple shopping cart program using an array. Create functions to add items, remove items, and update quantities using the splice method. Print the cart's contents after each operation?

var shopping:string[]=["fruits","vegitable","shirt","pent","eggs","rice"]
console.log( "Shopping Items ",shopping);

function add()
{
    shopping.splice(0,0,"faraz")
    return shopping;
    
}
add()
console.log ("After adding faraz",shopping );

function remove()
{
    shopping.splice(1,2)
    return shopping;
    
}
remove()
console.log ("After remove",shopping );

function update()
{
    shopping.splice(1,2,"pizza")
    return shopping;
    
}
    
update()
console.log ("After update",shopping );