const welcome = document.getElementById('myHeading');
const container_2_button = document.querySelector('.myButton');
const container_2 = document.getElementById('container_2');

welcome.addEventListener("click", () => {
    welcome.textContent = "Have a Good Time!"
}
);

container_2_button.addEventListener("click", () => {
container_2.style.display = 'flex'
}
);
// var myButton = document.querySelector('.myBotton')
// myButton.addEventlistener = ('click',)

