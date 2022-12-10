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
    
    tg.sendData([name, surname, age, comment]);
});


