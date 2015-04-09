//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var name = 'Tyer';

var isTyler = function(name) {
    if (name === 'tyler') {
        return true;
    } else {
        return false;
    }



    //Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


    var getName = function() {
        var name = prompt("Please insert your name");
        return name;
    };

    //Next Problem



    //Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
    //then alerts "Welcome, " plus whatever the users name is.


    var welcome = function() {
        var name = getname();
        return awesome;

    };
    alert("welcome " + name);


    //Next problem




    //What is the difference between arguments and parameters?

    //A parameter is a variable in a method definition.
    //When a method is called, the arguments are the data you pass into the method's parameters


    //Next problem



    //What are all the falsy values in JavaScript and how do you check if something is falsy?


    /*Falsy
  NaN
  null
  undefined
  0
  ""
  false
  */
    if (variable === false)



    //Next Problem



    //Create a function called myName that returns your name

        var myName = function() {
        return "jake";
    };

    //Now save the function definition of myName into a new variable called newMyName

    var myNewName == myName;
}

//Now alert the result of invoking newMyName

alert(myNewName)

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

var outerFn = function() {
    return function() {
        return "jake";
    };
};
//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = ounterFn();

//Now invoke innerFn.
innerFn();
