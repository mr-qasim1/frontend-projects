function show(Event) {
    
    console.log(Event.target.parentElement.parentElement.lastElementChild);

    const last_element = Event.target.parentElement.parentElement.lastElementChild;
    if (last_element.style.display == "none") {
        last_element.style.display = "block";
        Event.target.innerText = "-";
    }
    else {
        last_element.style.display = "none";
        Event.target.innerText = "+";
    }
}