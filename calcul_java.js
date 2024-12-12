// let  hour = document.querySelector('.hysR')
// let  minutes = document.querySelector('.mysR')
// let  day = document.querySelector('.dysR')
// let  second = document.querySelector('.smysR')
// let counddown = new Date('25 december 2024').getTime();
// let timer = setInterval(function(){
//     let now = new Date().getTime();
//     // get time distance
//     let distance = counddown - now;
//     // console.log(distance);
//     let days = Math.floor(distance/(1000 * 60 * 60 * 24));
//     // console.log(days)
//     let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) /(1000 * 60 * 60));
//     let minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     let secs = Math.floor((distance % (1000 * 60)) / 1000)
//     day.innerHTML = days;
//     minutes.innerHTML = minute;
//     second.innerHTML = secs;
//     hour.innerHTML = hours;
// }, 1000)

// let tex ="Hello, welcome to the typing effect demo! ";
// let texs = 'maful comuter $"{texs}".';
// // console.log(texs);


// // caculator

// let display = document.getElementById("display");
// function appendTodisplay(input){
//     display.value += input;
// }
// function clearDisplay(){
//     display.value = "";
// }
// function calculate(){
//     try{
//     display.value = eval(display.value);

//     }
//     catch(error){
//         display.value = "error"
//     }
    
// }




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
  

// let fornt = document.querySelector('.clasfont');
// let noti = document.querySelector('.notification')
// function notification(){
//     fornt.addEventListener('click', function(){
//         noti.classList.toggle('flex');
//         // alert('jajs')
//     })
    
// }
// notification();





    // Confirm Button Action
    
    // function confirmAction(button) {
    //     // Highlight the card or show a message
    //     const card = button.closest('.w_12345');
    //     card.style.backgroundColor = '#d4edda'; // Green background
    //     alert('You confirmed this user!');
    // }

    // // Delete Button Action
    // function deleteAction(button) {
    //     // Remove the card or show a confirmation
    //     const card = button.closest('.w_12345');
    //     const confirmation = confirm('Are you sure you want to delete this user?');
    //     if (confirmation) {
    //         card.remove();
    //         alert('User deleted successfully!');
    //     }
    // // }
    // document.addEventListener("DOMContentLoaded", () => {

    function confirmAction(button) {
        const card = button.closest('.w_12345'); // Get the card container
        card.classList.add('confirmed'); // Add confirmed class for styling
        alert('You confirmed this user!');
    }

    // Delete Button Action
    function deleteAction(button) {
        const card = button.closest('.w_12345'); // Get the card container
        const confirmation = confirm('Are you sure you want to delete this user?'); // Confirm dialog
        if (confirmation) {
            card.remove(); // Remove the card
            alert('User deleted successfully!');
        }
    }
//     const confirm = document.getElementById("confirm")
//     const del = document.getElementById("del")

//     confirm.addEventListener("click", () => {
//         alert("sdfghhh")
//     })
// del.addEventListener("click", () => {
//     alert("delete")
// })
//      })
//     //   function to save 
//     const card = document.getElementById("card")
//     let cards = []
// const saveCard = () => {
//     localStorage.setItem("cards", JSON.stringify(card))



// here is the post section 
const postButton = document.getElementById('postButton');
const postInput = document.getElementById('postInput');
const postsSection = document.getElementById('postsSection');

// Function to handle posting
postButton.addEventListener('click', () => {
    const content = postInput.value.trim();

    // Check if the input is not empty
    if (content === '') {
        alert('Please write something before posting!');
        return;
    }

    // Create a new post element
    const post = document.createElement('div');
    post.className = 'posted-content';
    post.innerHTML = `
        <p>${content}</p>
        <button class="btn btn-danger btn-sm" onclick="deletePost(this)">Delete</button>`;


    // Append the new post to the posts section
    postsSection.appendChild(post);

    // Clear the input field
    postInput.value = '';
});

// Function to delete a post
function deletePost(button) {
    const post = button.parentElement;
    post.remove();
}




const likeButton = document.getElementById('likeButton');
const commentButton = document.getElementById('commentButton');
const commentSection = document.getElementById('commentSection');
const commentBox = document.getElementById('commentBox');
const postCommentButton = document.getElementById('postCommentButton');
const commentList = document.getElementById('commentList');

// Like Button Event
likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('liked');
    if (likeButton.classList.contains('liked')) {
        likeButton.textContent = 'Liked';
    } else {
        likeButton.textContent = 'Like';
    }
});

// Comment Button Event
commentButton.addEventListener('click', () => {
    commentSection.classList.toggle('d-none');
    if (!commentSection.classList.contains('d-none')) {
        commentButton.textContent = 'Hide Comments';
    } else {
        commentButton.textContent = 'Comment';
    }
});

// Post Comment Event
postCommentButton.addEventListener('click', () => {
    const commentText = commentBox.value.trim();
    if (commentText === '') {
        alert('Please write a comment before posting!');
        return;
    }

    // Add comment to the list
    const newComment = document.createElement('li');
    newComment.textContent = commentText;
    commentList.appendChild(newComment);

    // Clear the comment box
    commentBox.value = '';
}); 


// here is the adding code
function addFriend(button) {
    button.textContent = 'Friend Added';
    button.style.backgroundColor = '#ccc';
    button.style.color = '#666';
    button.disabled = true;
    alert(`${button.closest('li').querySelector('strong').textContent} has been added as a friend!`);
}

// Delete Friend Functionality
function deleteFriend(button) {
    const confirmation = confirm(`Are you sure you want to delete ${button.closest('li').querySelector('strong').textContent}?`);
    if (confirmation) {
        const listItem = button.closest('li');
        listItem.remove();
        alert('Friend deleted successfully.');
    }
}




// search bar 
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');










document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const namesList = document.getElementById('namesList');
    const names = namesList.getElementsByTagName('li');

    // Event listener for input
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();

        // Loop through all list items and hide those that don't match the search query
        Array.from(names).forEach((name) => {
            const text = name.textContent.toLowerCase();
            if (text.includes(filter)) {
                name.style.display = '';
            } else {
                name.style.display = 'none';
            }
        });
    });

    // Prevent form submission
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
    });
});




























