let  hour = document.querySelector('.hysR')
let  minutes = document.querySelector('.mysR')
let  day = document.querySelector('.dysR')
let  second = document.querySelector('.smysR')
let counddown = new Date('25 december 2024').getTime();
let timer = setInterval(function(){
    let now = new Date().getTime();
    // get time distance
    let distance = counddown - now;
    // console.log(distance);
    let days = Math.floor(distance/(1000 * 60 * 60 * 24));
    // console.log(days)
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) /(1000 * 60 * 60));
    let minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((distance % (1000 * 60)) / 1000)
    day.innerHTML = days;
    minutes.innerHTML = minute;
    second.innerHTML = secs;
    hour.innerHTML = hours;
}, 1000)

let tex ="Hello, welcome to the typing effect demo! ";
let texs = 'maful comuter $"{texs}".';
// console.log(texs);


// caculator

let display = document.getElementById("display");
function appendTodisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
    display.value = eval(display.value);

    }
    catch(error){
        display.value = "error"
    }
    
}




// notification box 
// let show = document.querySelector('.bb')
// const notification = document.querySelector('.notification');
// function showNotification(message) {
//     notification.textContent = message; // Set the message
//     // notification.classList.add('bb'); // Show the notification

//     // Automatically hide the notification after 3 seconds
//     setTimeout(() => {
//       notification.classList.remove('bb');
//     }, 3000);
//   }

// let  bb = document.querySelector('.notification');
// let notification = document.querySelector('.bb');
// function showNotification(message){
// let notification = document.querySelector('.bb');
// if (condition) {
    
// }

// }


// function showNotification(message, type = 'success') {
//     const notification = document.querySelector('.bb');
//     notification.textContent = message;
//     notification.style.backgroundColor = type === 'error' ? 'red' : '#4caf50';
//     notification.classList.add('notifications');
  
//     setTimeout(() => {
//       notification.classList.remove('show');
//     }, 3000);
//   }
  

let fornt = document.querySelector('.clasfont');
let noti = document.querySelector('.notification')
function notification(){
    fornt.addEventListener('click', function(){
        noti.classList.toggle('flex');
        // alert('jajs')
    })
    
}
notification();


<div class="spanss">
<span class="span_12wra">
    <i><img class="imgwrapsed" src="C:\Users\USER\Pictures\Saved Pictures/1713766694429.jpg" alt=""></i>
    
            <i><img class="imgwrapsed" src="C:\Users\USER\Pictures\Saved Pictures/1713766694429.jpg" alt=""></i>
    
</span> 

<span class="span_12wras">
    <I class=" span_12w"><img class="imgwrapseded" src="C:\Users\USER\Pictures\Camera Roll/IMG-20240824-WA0018.jpg" alt=""></I>

    <span class="flex_directions">
        <li>bgtyghbdj</li>
        <li>hdhujmjmdkm</li>
    </span>

</span>

</div>
<span class="spansses">
    <i>hi am lookinf for hairstyles please guys</i>
</span>