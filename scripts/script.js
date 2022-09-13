let number = 0;


$(document).ready(function() {
    $(".form").submit(function() {
        let task = document.querySelector('.input').value;
        number++;
        $("ul").append('<li' + ' class="' + number + '">' + task + '</li>');



        document.querySelector('.input').value = '';


        document.querySelector('span').innerText = number;
    });



});