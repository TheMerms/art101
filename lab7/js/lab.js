//Author: Nik Mermer
//Date October 24, 2021


//Create a new function in your file, call it what you like, but choose wisely.
function sortUserName() {
  //In the function, declare a variable userName and use window.prompt() to get the user's name from the user
    var userName = window.prompt("Hello, PLease tell me your name so I may fix it.");
    console.log("userName =", userName);
    //Sort the letters of the user's name and return those from the function. Hint: You can't sort strings, but you can sort arrays. Can you convert it back and forth?
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    var nameArraySorted = nameArraySort.join('');
    console.log("nameArraySorted =", nameArraySorted);
    //Make sure your function uses return to return the results.
    return nameArraySorted
}

//Outside of the function, call the function and output the results with document.writeln() to neatly output the user's sorted name.
document.writeln("Okie Doke. Your fixed name is: ",
    sortUserName(), "</br>");


//Strings print nicely on your webpage, so you don't have to use JSON.stringify() this time.
