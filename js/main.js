const links = document.querySelectorAll('.header .nav .links .main_item .link');
let navbarToggler = document.getElementById("navbar-toggler");
let navbarMenu = document.querySelector(".header .nav .links");
const header = document.querySelector('.header');
const logo = document.querySelector('.logo');
const startButton = document.querySelector('.start');

document.addEventListener("DOMContentLoaded", function() {
navbarToggler.addEventListener("click", function() {
    navbarMenu.classList.toggle("show");
});
});


function handleScroll() {
if (window.scrollY > 0.5 || window.matchMedia('(max-width: 797px)').matches) {
    // تغيير لون الخلفية عند التمرير لأسفل أو في وضع الهاتف
    header.style.backgroundColor = '#fff';
    header.style.zIndex ='9';
    header.style.boxShadow = '0px 1px 3px 0px rgb(0,0,0,50%)';
    
    // تغيير لون الروابط عند التمرير لأسفل أو في وضع الهاتف
    const links = document.querySelectorAll('header .nav .links .main_item .link');
    links.forEach(function(link) {
    link.style.color = '#000';
    });

    // تغيير لون الشعار إلى اللون الأساسي
    logo.style.color = 'var(--primary)';

    // تغيير خلفية زر البدء إلى اللون الثانوي
    startButton.style.backgroundColor = 'var(--secondary)';
    startButton.style.color = '#fff'
} else {
    // استعادة اللون الأصلي عند العودة إلى أعلى المستند وليس في وضع الهاتف
    header.style.backgroundColor = 'initial';
    header.style.boxShadow = 'none';
    
    // استعادة لون الروابط الأصلي عند العودة إلى أعلى المستند وليس في وضع الهاتف
    const links = document.querySelectorAll('header .nav .links .main_item .link');
    links.forEach(function(link) {
    link.style.color = 'var(--light)';
    });

    // استعادة لون الشعار الأصلي
    logo.style.color = 'var(--light)';

    // استعادة خلفية زر البدء الأصلية
    startButton.style.backgroundColor = '#fff';
    startButton.style.color = 'var(--primary)'
}
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);


// استدعاء العناصر
const filterMenuItems = document.querySelectorAll('.filter-menu li');
const boxes_filter = document.querySelectorAll('.our-projects .boxes .box');

filterMenuItems.forEach(item => {
    item.addEventListener('click', function() {
    filterMenuItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');

    const filterValue = this.getAttribute('data-filter');
    boxes_filter.forEach(box => {
        const category = box.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === category) {
        box.style.display = 'block';
        } else {
        box.style.display = 'none';
        }
        });
    });
});




// Scroll 


const move = document.getElementById('scroll');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        move.style.display = "flex";
    } else {
        move.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document


move.addEventListener('click' , function(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})



// Pop Login

const home = document.getElementById("home");
const start_login = document.getElementById('start_login');
const start_login2 = document.getElementById('start_login2');
const close_login = document.getElementById('close_login');
const username = document.getElementById('username');
const password = document.getElementById('password');
const email_label = document.getElementById('email_label');
const email_input = document.getElementById('email_input');
const sign_up = document.getElementById('sign_up');
const login_in = document.getElementById('login_in');
const errormessage = document.getElementById('error-message');
const label_username = document.getElementById('label_username');


start_login.addEventListener('click' , function() {
    if(home.style.opacity == '0' && home.style.pointerEvents == 'none') {
        home.style.opacity = '1';
        home.style.pointerEvents = 'all';
    } else {
        home.style.opacity = '0';
        home.style.pointerEvents ='none';
    }
})

start_login2.addEventListener('click' , function() {
    if(home.style.opacity == '0' && home.style.pointerEvents == 'none') {
        home.style.opacity = '1';
        home.style.pointerEvents = 'all';
    } else {
        home.style.opacity = '0';
        home.style.pointerEvents ='none';
    }
})

close_login.addEventListener('click' , function(){
    if(home.style.opacity == '1' &&  home.style.pointerEvents =='all'){
        home.style.opacity = '0';
        home.style.pointerEvents ='none';
        username.value = '';
        password.value = '';
    }
})



let mood = 'signin'; // Set the initial mood to 'signin'

let dataLogin = [];




function displayErrorMessage(message) {
    errormessage.style.display = 'block';
    errormessage.innerHTML = message;
}

function hideErrorMessage() {
    errormessage.style.display = 'none';
}

sign_up.addEventListener('click', function() {
    username.value = '';
    password.value = '';
    email_input.style.display = 'block';
    email_input.value = '';
    email_label.style.display = 'block';

    // Use a conditional statement to switch between "Sign In" and "Sign Up"
    if (mood === 'signin') {
        login_in.innerHTML = 'Sign Up';
        sign_up.innerHTML = 'Sign In';
        mood = 'signup'; // Update the mood to 'signup'
        label_username.innerHTML = 'Username'
        username.placeholder = 'Username';
    } else {
        login_in.innerHTML = 'Sign In';
        sign_up.innerHTML = 'Sign Up';
        mood = 'signin'; // Update the mood back to 'signin'
        email_input.style.display = 'none'; // Hide the email input field
        email_label.style.display = 'none'; // Hide the email label
        label_username.innerHTML = 'Username or Email';
        username.placeholder = 'Username or Email'; 
    }

    // Reset the error message display
    errormessage.style.display = 'none';
    
    // Add password validation
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (mood === 'signup') {
        password.addEventListener('input', function() {
            if (password.value.length < 8 || !passwordRegex.test(password.value)) {
                errormessage.style.display = 'block';
                errormessage.innerHTML = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
                sign_up.disabled = true;
                sign_up.style.backgroundColor = '#8c8c8c';
            } else {
                errormessage.style.display = 'none';
                sign_up.disabled = false;
                sign_up.style.backgroundColor = '#f6f4f9';
            }
        });
    }
    
    sign_up.style.cursor = 'pointer';
    // sign_up.style.color = '#f6f4f9';
    // sign_up.style.background = '#6222CC';
});





function showSuccessMessage() {
    if (mood === 'signup') {
        // Load the existing data from local storage
        let dataLogin = JSON.parse(localStorage.getItem('dataLogin')) || [];
        
        // Check if username or email already exists
        let isUserExist = dataLogin.some(function(user) {
            return user.username === username.value || user.email === email_input.value;
        });
        
        if (isUserExist) {
            displayErrorMessage('Username or email already exists');
            return;
        }


        // Add the new user data to the existing data
        let user = {
            username: username.value,
            email: email_input.value,
            password: password.value
        };
        dataLogin.push(user);
        
        // Save the updated data to local storage
        localStorage.setItem('dataLogin', JSON.stringify(dataLogin));
        
        displayErrorMessage('Successfully registered');
        successMessageTimeout = setTimeout(function() {
            hideErrorMessage();
            // Change the mood to 'signin' after successful signup
            mood = 'signin';
            login_in.innerHTML = 'Sign In';
            sign_up.innerHTML = 'Sign Up';
            // Reset any input fields if needed
            username.value = '';
            email_input.style.display = 'none';
            email_label.style.display = 'none';
            password.value = '';
        }, 3000);
    } else if (mood === 'signin') {
        // Load the existing data from local storage
        let dataLogin = JSON.parse(localStorage.getItem('dataLogin')) || [];
        
        // Get the entered username or email
        let enteredValue = username.value;
        
        // Find the user data that matches the entered username or email
        let userData = dataLogin.find(function(user) {
            return user.username === enteredValue || user.email === enteredValue;
        });
        
        // Verify the password if the user data was found
        if (userData && userData.password === password.value) {
            displayErrorMessage('Successfully logged in');
            successMessageTimeout = setTimeout(function() {
                hideErrorMessage();
                // Reset any input fields if needed
                username.value = '';
                password.value = '';
            }, 3000);
        } else {
            displayErrorMessage('Invalid username/email or password');
            successMessageTimeout = setTimeout(function() {
                hideErrorMessage();
            }, 3000);
        }
    }
}

login_in.addEventListener('click', function() {
    // Reset the error message display
    errormessage.style.display = 'none';
    
    // Validate the inputs
    let isValid = true;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (mood === 'signup') {
        if (!emailRegex.test(email_input.value)) {
            errormessage.style.display = 'block';
            errormessage.innerHTML = 'Please enter a valid email address.';
            isValid = false;
        }
        if (password.value.length < 8 || !passwordRegex.test(password.value)) {
            errormessage.style.display = 'block';
            errormessage.innerHTML = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
            isValid = false;
        }
    } else {
        // Check if user exists in Local Storage
// Check if user exists in Local Storage
let user = localStorage.getItem('user');
if (user) {
    user = JSON.parse(user);
    if (username.value === user.username && password.value === user.password) {
        // Display welcome message
        let welcomeMessage = document.createElement('span');
        welcomeMessage.innerHTML = `Welcome, ${user.username}!`;
        welcomeMessage.style.marginLeft = '10px';
        let welcomeDiv = document.getElementById('welcome-message');
        if (welcomeDiv) {
            welcomeDiv.appendChild(welcomeMessage);
        }
        

        
        // Hide login form and display protected content
        login_form.style.display = 'none';
        protected_content.style.display = 'block';
    } else {
        errormessage.style.display = 'block';
        errormessage.innerHTML = 'Invalid email or password.';
    }
} else {
    errormessage.style.display = 'block';
    errormessage.innerHTML = 'Invalid email or password.';
}    }
    
    // Show success/error message
    if (isValid) {
        showSuccessMessage();
    }
});

// Links In pages

pages_links = document.querySelector('.pages_links');
pages_items = document.querySelector('.pages_items');


pages_links.addEventListener('click' , function() {
    if(pages_items.style.display == 'none') {
        pages_items.style.display = 'block';
    }else {
        pages_items.style.display = 'none';
    }
})




window.addEventListener('load', () => {
    // Hide the loading page after 5 seconds
    const loadingPage = document.querySelector('.loading-page');
    setTimeout(() => {
        loadingPage.style.display = 'none';
    }, 1500); // Set the timeout to 5000 milliseconds (5 seconds)
});





