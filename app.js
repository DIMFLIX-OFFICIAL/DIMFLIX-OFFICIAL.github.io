let tg = window.Telegram.WebApp;

tg.MainButton.textColor = document.documentElement.style.getPropertyValue('--tg-theme-text-color');
tg.MainButton.color = document.documentElement.style.getPropertyValue('--tg-theme-button-color');


tg.MainButton.show();

name = document.getElementById('name').value;
surname = document.getElementById('surname').value;
age = document.getElementById('age').value;
comment = document.getElementById('comment').value;

console.log(name);
console.log(surname);
console.log(age);
console.log(comment);


Telegram.WebApp.onEvent("mainButtonClicked", function(){
    name = document.getElementById('name').value;
    tg.sendData(name);
});


