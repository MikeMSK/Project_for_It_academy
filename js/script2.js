var btn = document.querySelector(".btn");
var content = document.querySelectorAll(".imgs");
console.log (content.length);

btn.addEventListener("click", btnClick);
function btnClick() {
    if (content[0].classList.contains("hidden")) {
        btn.textContent = "LOAD LESS";
        
    } else {
        btn.textContent = "LOAD MORE";
    }
    for (var e=0; e<content.length; e++){
        content[e].classList.toggle("hidden")
    }
}