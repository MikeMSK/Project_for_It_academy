// масив(все слайдеры)
var slides = document.querySelectorAll('#slides .slide');
// текущий слайд (переменная)
var currentSlide = 0;
// интервал в 3 секунды для следующего слайда
var slideInterval = setInterval(nextSlide,3000);
// функция следующий слайд

function nextSlide() {
    goToSlide(currentSlide+1);
}
function previousSlide() {
    goToSlide(currentSlide-1);
}
function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
// стрелки <> 
var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function() {
    pauseSlideshow();
    nextSlide();
};
previous.onclick = function() {
    pauseSlideshow();
    previousSlide();
};
// кнопка паузы
var playing = true;
// сама кнопка в переменной
var pauseButton = document.getElementById('pause');
function pauseSlideshow(){
    pauseButton.style.backgroundImage = 'url(../img/playBlack.png)';
    playing = false;
    clearInterval(slideInterval);
}
function playSlideshow() {
    pauseButton.style.backgroundImage = 'url(../img/playWhite.png)';
    playing = true;
    slideInterval = setInterval(nextSlide,3000);
}
pauseButton.onclick = function() {
    if(playing) {
    pauseSlideshow();
    } else {
    playSlideshow();
    }
}

