/* Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

 */

var Person = function (firstAndLast) {
  let nameArr = firstAndLast.split(' '); 
  // Complete the method below and implement the others similarly
  this.getFirstName = function () {
    return nameArr[0];
  };
  this.getLastName = function () {
    return nameArr[1];
  };
  this.getFullName = function () {
    return nameArr.join(' ');
  };
  this.setFirstName = function (first) {
    nameArr.splice(0,1,first);
  };
  this.setLastName = function (last) {
    nameArr.splice(1,1,last);
  };
  this.setFullName = function (firstAndLast) {
    nameArr = firstAndLast.split(' ');
  };
  return firstAndLast;
};

var bob = new Person("Bob Ross");
bob.getFullName();
