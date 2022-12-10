let tg = window.Telegram.WebApp;

tg.MainButton.textColor = document.documentElement.style.getPropertyValue('--tg-theme-text-color');
tg.MainButton.color = document.documentElement.style.getPropertyValue('--tg-theme-button-color');


tg.MainButton.show();
tg.MainButton.setText("Отправить данные");

let name = document.getElementById('name').value;
let surname = document.getElementById('surname').value;
let age = document.getElementById('age').value;
let comment = document.getElementById('comment').value;


Telegram.WebApp.onEvent("mainButtonClicked", function(){
    try {
        
        let name = document.getElementById('name').value;
        tg.sendData(name);
    } catch(e) {
        let p = document.createElement("p");
        p.innerText = e';
        
        let container = document.getElementById('container')
        container.appendChild(p); 
    }
});


