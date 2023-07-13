//idrees

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
must make the return for the cat not the x
function double(7) {
  return 2 * 7;
}
u can't use numbers in parameters
function double('7') {
  return 2 * 'x';
}
u can't use '' in parameters
*/
// AHMED 

//what is the error:
function double(cat) {
  return 2 * x; // The parameter cat , but the multiplication  is performed on an undefined variable x
}

function double(7) {
  return 2 * 7; //1- you should use a valid variable name as the parameter
}

function double('7') {
  return 2 * 'x'; //  parameters should be valid variable names, without quotes around them
}
//*/`)
