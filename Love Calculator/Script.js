const form=document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name1 = document.querySelector("#name1").value;
    var name2 = document.querySelector("#name2").value;
    var loveScore = Math.floor(Math.random() * 100) + 1;
    var result = document.querySelector("#result");
    result.textContent = name1 + " and " + name2 + " have a love score of " + loveScore + "%!";
});