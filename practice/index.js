function toggle_drop_down() {
    const drop_down_open = document.getElementsByClassName("drop-down")[0];
    const drop_down_closed = document.getElementById("1sthover");
    drop_down_closed.addEventListener("mouseleave", function () {
        drop_down_open.style.display = "none";
    });    
    drop_down_open.style.display = "block";
}
