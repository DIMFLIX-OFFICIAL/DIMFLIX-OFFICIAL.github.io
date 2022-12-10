let tg = window.Telegram.WebApp;

tg.MainButton.textColor = document.documentElement.style.getPropertyValue('--tg-theme-text-color');
tg.MainButton.color = document.documentElement.style.getPropertyValue('--tg-theme-button-color');


tg.MainButton.show();
tg.MainButton.setText("Отправить данные");


Telegram.WebApp.onEvent("mainButtonClicked", function(){
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let age = document.getElementById('age').value;
    let comment = document.getElementById('comment').value;
    
    var all_data = [name, surname, age, comment]
    
    tg.sendData(all_data);
});


let usercard = document.getElementById("usercard");
let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p); 


