//window.alert("Hello world How Are you Doing"); This is a single line comment
/* 
This is the multi-line comment
 */

//Methods on getting or selecting a content from the html content
document.getElementById('demo').innerHTML = "Hello welcome to my World";
document.getElementsByClassName('demo')[0].innerHTML = "Javascript is Awesome!";
document.getElementsByTagName('h2')[2].innerHTML = "Lets learn Javascript together"; 
document.getElementsByName('demo')[0].innerHTML = "I love to Learn javascript";
document.querySelector('#myDiv').innerHTML = "We are learning Javascript together";
document.querySelectorAll('.demo')[2].innerHTML = "Can u teach me Javascript";

/* Variables in Javascript
var
let
const*/

var a = document.querySelectorAll('.demo1');
a[0].innerHTML = "what are you doing in the class today"

var b = document.querySelectorAll('.demo1')[1].innerHTML = "I love Javascript"

let c = 20;
let d = 30;
let e = document.querySelectorAll('.demo1');

e[1].innerHTML = c + d;

//window.alert(e);

/* Datatypes in Javascript 
   String Datatype
   Number Datatype
   Boolean Datatype
   Javascript Arrays
   Javascript Objects
   The Typeof Operator
   Undfined
   null
   */

   let flt= 56.7;

   let retun = document.querySelectorAll('.demo1');
            

   retun[2].innerHTML = typeof flt;

   let bool = false;

   retun[3].innerHTML = typeof bool;

   /* Javascript Arrays */

   let arr = ['Manful', 'computer', 'Institute', 'Uyo', 5000, true, false];
   retun[4].innerHTML =  typeof arr[5];

   /* Javascript Objects*/
  let obj = {Name: 'Promise stephen', 
             age:45,
             hair: 'brown',
             eyeColor : 'blue',
             gender : 'male',
             natioNality : 'Nigerian',
             religion : 'Christianity',
            }

retun[5].innerHTML =obj.Name + " " + obj.age + " " + " " + " " + obj.hair + " " + obj.eyeColor;

let carObj ={
    nameOfcar : 'Mercedes Benz',
    color : 'black',
    brand : 'Lx 3450',
    price : 50000000,
    year : '2019',
}

retun[6].innerHTML = 'i drive a' + " " + " " +  carObj.color + " " + " " + " " + carObj.nameOfcar + " " + ' worth' + " " + " " + carObj.price + " "
+ 'in the' + " " + carObj.year;
retun[6].style.color = 'red'

//Operators in Javascript 
  /* Arithmetic Operators
   Addition Operator; 
   Multiplication Operator
   */
// the Additional operator is used to Add numbers and values together
let num = 20;
let num1 = 30
retun[7].innerHTML = num + num1;

// the multiplicational operator is used to multiply numbers and values
let f = 10
let g = 20
retun[8].innerHTML = f * g;

/* Assignment Operator*/

retun[9].innerHTML = f += g;
retun[10].innerHTML = f *= g;
retun[11].innerHTML = f -=g;
retun[12].innerHTML = f /=g;
retun[13].innerHTML = f %= g;

/* Comparison Operator 
equal to ==;
*/

let num2 = 20;
let num3 = 20;
let age = 18;

let votable = (age > 20) ? "you can vote" : " sorry you cannot vote";
retun[14].innerHTML = votable; 
//document.querySelectorAll('.demo1')[14].innerHTML = votable;

let gender1 = "male";

let gende = (gender1 == "male") ? "you are a boy" : " sorry you are a girl";
retun[15].innerHTML = gende;

let bool1 = false;

let produvt = (bool1 == true) ? "your product is" : "your product is not";
retun[16].innerHTML =  produvt +  " avalaible ";
retun[16].style.color = 'blue';
//alert( typeof bool1)

let myBtn = document.getElementById('btn');

myBtn.onclick = () =>  {
   let x = 8;
   let y = 9;
   let z = (x * y);
   retun[17].innerHTML = "I am " + (z) + " years old today " + "<br>" + " he is a good boy at "
    + (z) + " years old";
   retun[17].style.color = 'green';
   retun[17].style.fontSize = '50px';
   retun[17].style.fontFamily = 'sans-serif';
   retun[17].style.fontWeight = '900';
   retun[17].style.border = '1px solid red';
   retun[17].style.width = '50%';
   retun[17].style.height = '100vh';
};

let person = {
  firstName : "Promise",
  lastName : "Stephen",
  color : "Chocolate",
  club : "Barcelona",
  fullName :function(){
    return this.firstName + " " + this.lastName
  }
  };

//let myBtn1 = document.getElementById('btn1');

function myFunction(){
  retun[18].innerHTML = person.fullName()
}


/*let str = document.querySelectorAll('.demo1')[19].innerHTML;
function myyFunction(){
 txt = str.replace('here', ' yours');
 retun[19].innerHTML = txt;
  }*/

/*LOGICAL OPERATOR
Operator description
&& Logical and
|| logical or
! logical not
*/


let usr = "abcde";
let urpwd = "xxx";

let ursr1 = 'abcdef';
let uspwd1 = "xxy";


 /* Using the logical and*/
function myyFunction(){
   if(usr == ursr1 && urpwd == uspwd1){
    retun[20].innerHTML = "real user"
   }else{
    retun[20].innerHTML = "not real user"
   }

   retun[20].style.color = "red"

  
}

/* using the logical or ||*/
function myyFunction(){
 
  if(usr == ursr1 || urpwd == uspwd1){
    retun[21].innerHTML = typeof  usr;
  }else{
    retun[21].innerHTML = typeof ursr1; 
  }
  retun[21].style.color = "green"
}






function getDateandTime(){
  let montharr = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August',
 'September', 'october', 'November', 'December',
]

let date = new Date();
let year = date.getFullYear()
let month = date.getMonth()
let hour = date.getHours()
let minute = date.getMinutes()
let seconds = date.getSeconds()
let day =date.getDate()
let period = ""
let greetings = "am"
//let dname = date.getDate()


retun[22].innerHTML =  day + " " + montharr[month] + ', ' + year + " " + hour+ ":" +minute+ 
":" + seconds + period +greetings


if(hour >= 12){
  period = "pm";
}
if(hour > 12){
  hour -=12 ;
}else if (hour === 0){
  hour = 12;
}  

if (date.getHours() < 12){
  greetings = "Good morning";
}else if (date.getHours() < 18){
  greetings = "Good afternoon";
}else {
  greetings = "Good evening";
}

}


setInterval(getDateandTime, 1000)
setInterval (function(){
  getDateandTime();
}, 1000)

/* Assignment 
* Add am / pm
* make it show 1oclock instead of 13
* add good mornin, good afternoon, and good evening
* if second/minute is less than 10, add leading zero before */


/*function getDateAndTime(){
  let dte = new Date()
  let daysOfweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
    'Saturday'
  ]
  let months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'october', 'November', 'December',
 ]

let dayName = daysOfweek[now.getDay()];
let mnthName = months[now.getMonth()];
let dyofMonth = now.getDate();
let yr = now.getFullYear();
let hrs = now.getHours();
let minutes = now.getMinutes();
let sec = now.getSeconds();
let period = "Am";

if(hrs >= 12){
  period = "pm";
}
if(hrs > 12){
  hrs -=12 ;
}else if (hrs === 0){
  hrs = 12;
}

let formattedTime = '${hrs.String().padStart(2, 0)} : ${minutes.tostring}   ' 

retun[23].innerHTML = 'Today is' + dayName 

 

}*/

 /* Loop
 
  */

 // The for loop

 let x ;
 let text = '';
 for(x = 0; x < 10; x++)
 retun[24].innerHTML = text += "yes!" + '<br>';

 let mybtn = document.querySelectorAll('.demo2');

 let i;
 for(i=0; i < mybtn.length; i++ ){
  mybtn.onclick = () =>{
   
  }
 
 }


 var xx = 10 
 //document.getElementById('demo3').innerHTML = xx * 8;

 let rtn = document.querySelectorAll('.demo3');

 rtn[0].innerHTML = 10 * 10;
 rtn[0].style.color = 'blue';
 rtn[1].style.color = 'red';
 rtn[0].style.fontSize = '30px';
 rtn[0].style.fontFamily = 'monospce';
 //rtn[0].style.display = 'none';

  document.querySelectorAll('.demo3')[2].innerHTML = 10 * 10 ;
  document.querySelectorAll('.demo3')[2].style.color = 'red' ;


let mygobtn = document.querySelectorAll('.gobtn');
let myinput = document.querySelectorAll('.gbtn');

for(let xx = 0; xx < mygobtn.length; xx++){
  mygobtn[xx].onclick= function(){
    myinput[xx].value = this.getAttribute('att');
    mygobtn[xx].innerHTML = this.getAttribute('att')
}

   
}







// Creating picture array

let imgarr = [ ];


 let myImg = document.querySelector('.myimg');
 let mybtn1 = document.getElementById('next-btn1');
let start = 0;
 

 mybtn1.onclick = function(){
   /* myImg.src = imgarr[start] + '.jpg';
      start++;*/

      alert(myImg)

      }









  


    



