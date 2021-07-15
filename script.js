
let slider = document.getElementById("myRange");

slider.addEventListener("mousemove", ()=>{
    let x = slider.value;
    var color = `linear-gradient(90deg, var(--soft-cyan-full-slider-bar) ${x}%, var(--light-grayish-blue-empty-slider-bar) ${x}%)`;
    slider.style.background = color;
})