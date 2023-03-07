let items = document.querySelectorAll('li');


for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () {
        items[i].classList.toggle('done');
    });
}