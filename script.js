function searchService() {
    let input = document.getElementById("search").value.toLowerCase();
    let buttons = document.querySelectorAll("button");

    buttons.forEach(function(button) {
        if (button.innerText.toLowerCase().includes(input)) {
            button.style.display = "inline-block";
        } else {
            button.style.display = "none";
        }
    });
}