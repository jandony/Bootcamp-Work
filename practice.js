     // Here we create our prompt and confirm variables which will store user input.
     var confirmSushi = confirm("Do you like sushi?"); //Boolean
     var confirmGingerTea = confirm("Do you like Ginger Tea?"); // string

     // If the user likes sushi (confirmSushi === true), we run the following block of code.
     if (confirmSushi) {
       var sushiType = prompt("What kind of sushi do you like?"); // string (all of it)
       alert("You like " + sushiType + "!");
     }
     // If the user likes ginger tea (confirmGingerTea === true), we run the following block of code.
     else if (confirmGingerTea) {
       alert("You like ginger tea!!");
     }
     // If neither of the previous condition were true, we run the following block of code.
     else {
       document.write("You don't like sushi or ginger tea.");
     }