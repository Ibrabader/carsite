 alert('welcome to the carWOW');
 function cars () {
 var car = prompt('what kind of car do you like?');

 if(car == 'Sedan')
 { 
   alert('you are at the right place, check the categories')
 }
 else if ( car == '4*4')
 {
  alert(" you are at the right place, check the categories")}

  else { alert ('your welcom to check our website')
  }
 }
cars (); 
function ratings () {
   var userinput = prompt ( 'how many cars does CR7 has? the right answer is 10');

 while ( userinput !=10  ){
   userinput = prompt ( 'please try again')
 
};
 alert ('your answer is correct');

  

 var rate = prompt (' How do you rate our website');

 for (var i=0 ; i<rate; i++)
 { 
   document.write("<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Golden_star.svg/1200px-Golden_star.svg.png' width = '200px'; hight='200px';>" );
  
} }
ratings();




