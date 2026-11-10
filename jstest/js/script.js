let lightOn = true;

const bulb = document.querySelector("#bulb");
const hiddenImage = document.querySelector("#mmm");

function switchLight() 
{
    lightOn = !lightOn;

    if (lightOn) 
    {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        bulb.src = "images/lightbulbon.png";
        hiddenImage.style.display = "none";
    } 
    else 
    {
        document.body.style.backgroundColor = "#000000";
        document.body.style.color = "white";
        bulb.src = "images/lightbulboff.png";
        hiddenImage.style.display = "block";
    }
}

bulb.addEventListener("click", switchLight);