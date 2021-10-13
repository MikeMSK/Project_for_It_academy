document.addEventListener('click', ({ target: t }) => {
    if (t.classList.contains('photos__like-icon')) {
        const index = [...document.querySelectorAll('.photos__like-icon')].indexOf(t);
        const count = document.querySelectorAll('.photos__like-count')[index];
        count.classList.toggle('active');
        count.textContent -= [ 1, -1 ][+count.classList.contains('active')];
    }
})


var btn = document.querySelector(".btn");
var content = document.querySelectorAll(".imgs");
console.log (content.length);

btn.addEventListener("click", btnClick);
function btnClick() {
    if (content[0].classList.contains("hidden")) {
        btn.textContent = "CHOOSE";
        
    } else {
        btn.textContent = "SHARE";
    }
    for (var e=0; e<content.length; e++){
        content[e].classList.toggle("hidden")
    }
}