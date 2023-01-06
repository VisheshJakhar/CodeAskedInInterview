 var a = 10; // variable a assigned to 10

 var func = function () { // outermost function
     var b = 20;
     console.log("a and b is accessible (outer):", a, b);
     var innerFunc = function () { // innermost function
         var c = 30;
         console.log("a and b and c is accessible (innner):", a, b, c);
     }
     innerFunc();
     return;
 }
 func(); // invoke function func 
 console.log("only a is accessible (global):", a);

 /*In the above code, the value of variable a is accessible by all function scopes since it is in the global scope. 
 Meanwhile, variable b is not accessible outside the function assigned to func. 
 This is because the variable is of local scope for the function assigned to variable func. 
 Another thing to note is that the function assigned to the innerFunc variable can access variable b and c. 
 This is because the inner functions are lexically bound by the outer functions.*/