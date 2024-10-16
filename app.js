const btnHamburger = document.querySelector('.hamburger'); // Назначаем переменную (ячейку в памяти) btnHamburger
const menuPanel = document.querySelector('.menu-panel'); // Назначаем переменную menuPanel HTML-element, mille klass on menu-panel
const menuLinks = document.querySelectorAll('.menu-panel a'); // собери все ссылки в панели
const frameImage = document.querySelector('#frame'); // Выбираем HTML элемент, id которого frame
const images = ['2.jpg', '3.jpg', '4.jpg','5.jpg', '6.jpg', '7.jpg']; // массив всех фото, ичитаются с 0

let currentImageIndex = 0; // точка отсчета 0

 frameImage.addEventListener('click', ()=> { // если произошел клик
    currentImageIndex++; // +1

    if(currentImageIndex >= 5) { // если больше или равен 5ти
        currentImageIndex = 0; // то снова 0
    }

    frameImage.src = 'images/' + images[currentImageIndex]; // карусель
    
 });


btnHamburger.addEventListener('click', ()=> { // Lisame btnHamburger nupule sündmuse jälgimise, mis reageerib klikkimisele
    menuPanel.classList.toggle('active'); //  toggle добавляет или удаляет active 
});


document.addEventListener('click', (event) => { // если кликнуть, то
     if(!menuPanel.contains(event.target) && !btnHamburger.contains(event.target)) { // восклицательный знак- отрицание, проверка места где мы кликаем
         menuPanel.classList.remove('active');  // не на панель, то скрывать панель
    } 

});

menuLinks.forEach((link)=>{ // для каждой ссылки выполни свой код, метод перебора массива
    
    link.addEventListener('click', ()=> { // жди клика
        menuPanel.classList.remove('active'); // 
    });

});