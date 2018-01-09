## Let and Const

#### QUESTION 1 OF 3
What do you expect to be the output from running **getClothing(false)**?
```javascript
function getClothing(isCold) {
  if (isCold) {
    var freezing = 'Grab a jacket!';
  } else {
    var hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}
```
1. ReferenceError:freezing is not defined
2. Grab a Jacket!
3. **Undefined** ![rispostaGiusta]
4. It's a shorts kind of day


#### QUESTION 2 OF 3
What do you expect to be the output from running getClothing(false)?
```javascript
function getClothing(isCold) {
  if (isCold) {
    const freezing = 'Grab a jacket!';
  } else {
    const hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}
```
1. **ReferenceError:freezing is not defined** ![rispostaGiusta]
2. Grab a Jacket!
3. Undefined
4. It's a shorts kind of day


#### QUESTION 3 OF 3
What do you expect to be output from running the following code?
```javascript
let instructor = 'James';
instructor = 'Richard';
console.log(instructor);
```
1. James
2. **Richard** ![rispostaGiusta]
3. undefined
4. SyntaxError: Identifier 'instructor' has already been declared

### USE CASES

* use `let` when you plan to reassign new values to a variable
* use 'const' when you don't plane on a reassigning new values to a variable


[rispostaGiusta]: https://github.com/el3um4s/100-days-of-code/blob/master/Udacity/ES6%20-%20JavaScript%20Improved/icon-tick.png
