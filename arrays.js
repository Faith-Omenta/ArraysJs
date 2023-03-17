// Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
// arr2 = [true, "green", "where",12,56]
let arr1=[3,7,34,90,12];
let array=arr1.slice(-1);
console.log(array);

let arr2=[true, "green", "where",12,56];
let arra=arr2.slice(-1);
console.log(arra)



// Write a JS program that will join the following array elements into a string
// myPets = ["Cow", "Python", "Snake", "Dog"];
const  myPets = ["Cow", "Python", "Snake", "Dog"];
console.log(myPets.join)

// Write a JS script to sort the following array items
// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
console.log(arr3.sort())


//Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
 // var arr = ["apple", "mango", "apple",
//             "orange", "mango", "mango"];
let duplicates=[];
arr1.forEach(function(arr){
    if(!duplicates.includes(arr)){
        duplicates.push(arr);
    }
});
console.log(duplicates);


// Write a JS script to search for the following word in the array.
// 4
// If the word is present, console it else console "the search word was not found"
// let arr5 = ["the", "way", "x", 4, 23];
let arr5=["the", "way", "x", 4, 23];
const arrays=arr5.includes(4);
console.log(arrays)




// Write a JS script to sort the following string
// let word = "lufituaeb"
let text="lufituaeb"
let text1=[]
for (let i=0,n=text.length; i <n; i ++) {
text1.push(text[i])
}

srtext=text1.sort()
srtext=srtext1.join('')
console.log(srtext)