const form = document.querySelector('#user-form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('input[name="full_name"]')
    const email = document.querySelector('input[name="email"]')
    const password = document.querySelector('input[name="password"]')

    validate(/([А-Яа-яёЁЇїІіЄєҐґ]+\s)+/ig, name);
    validate(/[-.\w]+@([\w-]+\.)+[\w-]+/g, email);
    validate( /\w{8,}/ , password );

    function validate(regex, input) {
        const result = regex.test( input.value );
        if (result) {
            input.style.background = "#C2E0C6";
        } else {
            input.style.background = "#F9D0C4";
        }
    }
});

document.querySelectorAll('[data-show]').forEach(function (button) {
    button.addEventListener('click', function (e) {
        document.querySelector('#description').classList.add('d-none');
        document.querySelector('#preview').classList.add('d-none');

        document.querySelector('#' + e.currentTarget.getAttribute('data-show')).classList.remove('d-none');
    });
})









               /*           Задача:




Усложнённая необязательная задача:

Как вы заметили осталось ещё поле Опис, над ним есть две кнопки:
Опис и Перегляд (по аналогии как здесь на гитхабе когда вы пишете коментарий Write | Preview). Ваша задача:
При клике на Перегляд брать значение поля [name="description"] и заменить слова по следующим правилам:
++слово++ заменяем на <strong>слово</strong>
--слово-- заменяем на <i>слово</i>
(https://some-site.com/image.jpg) заменяем на <img src="https://some-site.com/image.jpg"/>,
т.е. условие, что строка начинается с круглой скобки, после которой идёт https://
и строка заканчивается расширением .jpg или .png и круглой скобкой. В остальных случаях замена произойти не должна.
https://some-site.com/anything/else заменяем на
<a href="https://some-site.com/anything/else">https://some-site.com/anything/else</a>
использовать исключительно эти теги для замены
этот текст вставляем в #preview с помощью свойства innerHTML

Необязательно, но желательно, сделать чтобы класс active перепрыгивал на ту кнопку
на которую только что нажали. Сейчас этот класс застрял на кнопке Опис

                */

 // validate(/(^[[А-Яа-яёЁЇїІіЄєҐґ]+\s)+/ig, name);
// var nameCheck = /([а-яґіїєА-ЯҐІЇЄ]\s?)*/ig;
// var nameResult = nameCheck.test( name.value );
// if (nameResult) {
//     name.style.background = "#C2E0C6";
// } else {
//     name.style.background = "#F9D0C4";
// }

//validate(/[-.\w]+@([\w-]+\.)+[\w-]+/g, email);
// var emailCheck = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
// var emailResult = emailCheck.test( email.value );
//
// if (emailResult) {
//    email.style.background = "#C2E0C6";
// } else {
//    email.style.background = "#F9D0C4";
// }

//validate( /\w{8,}/ , password );
// var passwordCheck = /\w{8,}/;
// var passwordResult = passwordCheck.test( password.value );
// if (passwordResult) {
//     password.style.background = "#C2E0C6";
// } else {
//     password.style.background = "#F9D0C4";
// }






