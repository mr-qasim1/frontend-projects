function hide(display) {
    console.log("onclick");
    let a = document.getElementsByClassName("child1")[0];
    let b = document.querySelector(".fa-solid.fa-bars");
    a.style.display = display;
    if (display == 'none') {
        b.style.display = "inline-block";
    }
    else {
        b.style.display = "none";
    }
}
function qasim(display) {
    console.log("click");
    let a = document.querySelector(".start-up")
    a.style.display = display;
}
