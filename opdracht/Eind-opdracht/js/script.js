var bezoeker = {
    voornaam : prompt("Wat is je voornaam"),
    achternaam : prompt("Wat is je achternaam"),
    email : prompt("Wat is je email"),
    woonplaats : prompt("Wat is je woonplaats"),
    leeftijd : prompt("wat is je leeftijd"),
};




document.querySelector("#Voornaam").innerHTML = (bezoeker.voornaam)
document.querySelector("#Achternaam").innerHTML = (bezoeker.achternaam)
document.querySelector("#Email").innerHTML = (bezoeker.email)
document.querySelector("#Woonplaats").innerHTML = (bezoeker.woonplaats)
document.querySelector("#Leeftijd").innerHTML = (bezoeker.leeftijd)


if (bezoeker.leeftijd == 16){
    document.body.style.backgroundColor = "orange";
}
if (bezoeker.leeftijd == 17){
    document.body.style.backgroundColor = "blue";
}
if (bezoeker.leeftijd == 18){
    document.body.style.backgroundColor = "gold";
}
if (bezoeker.leeftijd == 19){
    document.body.style.backgroundColor = "green";
}
if (bezoeker.leeftijd == null){
    document.body.style.backgroundColor = "purple";
};








