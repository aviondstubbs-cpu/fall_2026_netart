
const bulb = document.querySelector("#bulb");

bulb.onclick = function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        bulb.src = "images/lightbulboff.png";
    } else {
        bulb.src = "images/lightbulbon.png";
    }

};
