const allImages = document.getElementsByClassName("slide");
let current_index = 0;
const next_button = document.getElementById("next");
const previous_button = document.getElementById("previous");
function showSlide(index) {
    current_index = index;
    if (index > allImages.length-1) {
        current_index = 0;
    }
    else if (index < 0) {
        current_index = allImages.length-1;
    }
   for (let i = 0; i < allImages.length; i++){
        allImages[i].style.display="none";
    }
    allImages[current_index].style.display = "block";
}
next_button.addEventListener("click", function () {
    console.log("next");
    showSlide(current_index + 1);
    
});
previous_button.addEventListener("click", function () {
    console.log("previous");
    showSlide(current_index - 1);
});
setInterval(function () {
    showSlide(current_index + 1);
},1000)