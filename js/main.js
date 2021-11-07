

// CONTACTEZ NOUS

var logincontainer = document.querySelector('#logincontainer');
var signupcontainer = document.querySelector('#signupcontainer');
var signuptab = document.querySelector ('#signup-tab');
var logintab = document.querySelector ('#login-tab');
var loginlink = document.querySelector('.loginlink');
var signuplink = document.querySelector('.signuplink');

signuptab.addEventListener('click', function (){
	signupactive();
});

logintab.addEventListener('click', function (){
	loginactive();
});

loginlink.addEventListener('click', function (){
	loginactive();
});

signuplink.addEventListener('click', function (){
	signupactive();
});

function loginactive(){
	logincontainer.style.display = "block";
	signupcontainer.style.display ="none";
	logintab.classList.add('active');
	signuptab.classList.remove('active');
}

function signupactive(){
	logincontainer.style.display = "none";
	signupcontainer.style.display ="block";
	signuptab.classList.add('active');
	logintab.classList.remove('active');
}
