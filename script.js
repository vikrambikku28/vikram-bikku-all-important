function searchButtons() {
  let input = document.getElementById("searchBox").value.toLowerCase().trim();

  let items = document.querySelectorAll("button, .card, h2");

  items.forEach(function(item) {
    let text = item.textContent.toLowerCase();

    if (text.includes(input) || input === "") {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}

function darkMode(){
    document.body.classList.toggle("dark");
}