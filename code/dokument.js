function changeContent(title, description, buttonText, imageUrl, targetUrl) {

    console.log("Change content called with", title, description, buttonText, imageUrl, targetUrl);

    // Ändern Sie den Text der Überschriften
    document.querySelector('.col h1').innerHTML = title;
    document.querySelector('.col p').innerHTML = description;

    // Ändern Sie den Text und die URL des Buttons
    var button = document.querySelector('.col button');
    button.innerHTML = buttonText;
    button.onclick = function() {
        window.location.href = `${targetUrl}?background=${imageUrl}`;
    };

    var video = document.getElementById('backgroundVideo');
    video.src = '';

    document.body.style.backgroundImage = `url(${imageUrl})`;
    document.body.style.backgroundImage = `url(${imageUrl})`;
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.getElementById('frontimage'.src = imageUrl)
    sessionStorage.setItem('path', imageUrl);
    sessionStorage.setItem('pathh', description);
    document.getElementById('frontimage'.description);

}

const categoryOneImages = [
    "mother_witch.jpg",
    "royal_ghost.jpg",
    "monk.jpg",

];

const categoryTwoImages = [
    "cyhper.jpg",
    "jett.jpg",
    "neon.jpg",
    "raze.jpg",
    "yoru.jpg"
];

const categoryThreeImages = [
    "mortis.jpg",
    "bull.jpg",
    "cordelius.jpg",
    "griff.jpg",
    "baller.jpg"
];

const categoryFourImages = [
    "aura.jpg",
    "black-knight.jpg",
    "midas.jpg",
    "raider.jpg",
    "travis-scott.jpg"
];

var category1 = document.getElementById("Bild1");
var category2 = document.getElementById("Bild2");
var category3 = document.getElementById("Bild3");
var category4 = document.getElementById("Bild4");

var source1 = "../Bilder/Kategorie1/";
var source2 = "../Bilder/Kategorie2/";
var source3 = "../Bilder/Kategorie3/";
var source4 = "../Bilder/Kategorie4/";

var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
var counter4 = 0;

function ChangeImage(btnID, category) {

    var button = document.getElementById(btnID);
    switch (category) {
        case '1':
            if (btnID.includes("right")) {
                counter1++;
                if (counter1 == categoryOneImages.length) {
                    counter1 = 0;
                }
            } else {
                counter1--;
                if (counter1 == -1) {
                    counter1 = categoryOneImages.length - 1;
                }
            }


            category1.style.backgroundImage = "url('../Bilder/Kategorie1/" + categoryOneImages[counter1] + "')";
            document.body.style.backgroundImage = "url('../Bilder/Kategorie1/" + categoryOneImages[counter1] + "')";
            break;
        case '2':
            if (btnID.includes("right")) {
                counter2++;
                if (counter2 == categoryTwoImages.length) {
                    counter2 = 0;
                }
            } else {
                counter2--;
                if (counter2 == -1) {
                    counter2 = categoryTwoImages.length - 1;
                }
            }
            category2.style.backgroundImage = "url('../Bilder/Kategorie2/" + categoryTwoImages[counter2] + "')";
            document.body.style.backgroundImage = "url('../Bilder/Kategorie2/" + categoryTwoImages[counter2] + "')";
            break;
        case '3':
            if (btnID.includes("right")) {
                counter3++;
                if (counter3 == categoryThreeImages.length) {
                    counter3 = 0;
                }
            } else {
                counter3--;
                if (counter3 == -1) {
                    counter3 = categoryThreeImages.length - 1;
                }
            }
            category3.style.backgroundImage = "url('../Bilder/Kategorie3/" + categoryThreeImages[counter3] + "')";
            document.body.style.backgroundImage = "url('../Bilder/Kategorie3/" + categoryThreeImages[counter3] + "')";

            break;
        case '4':
            if (btnID.includes("right")) {
                counter4++;
                if (counter4 == categoryFourImages.length) {
                    counter4 = 0;
                }
            } else {
                counter4--;
                if (counter4 == -1) {
                    counter4 = categoryFourImages.length - 1;
                }
            }
            category4.style.backgroundImage = "url('../Bilder/Kategorie4/" + categoryFourImages[counter4] + "')";
            document.body.style.backgroundImage = "url('../Bilder/Kategorie4/" + categoryFourImages[counter4] + "')";

            break;
    }
}

function ShowImage(divID) {
    var imgSource;

    switch (divID) {
        case 1:
            imgSource = "../Bilder/Kategorie1/" + categoryOneImages[counter1];
            category1.style.border = "10px solid #03e9f4";
            category2.style.border = "none";
            category3.style.border = "none";
            category4.style.border = "none";
            break;
        case 2:
            imgSource = "../Bilder/Kategorie2/" + categoryTwoImages[counter2];
            category2.style.border = "10px solid #c85e2a";
            category1.style.border = "none";
            category3.style.border = "none";
            category4.style.border = "none";
            break;
        case 3:
            imgSource = "../Bilder/Kategorie3/" + categoryThreeImages[counter3];
            category3.style.border = "10px solid #8720bb";
            category1.style.border = "none";
            category2.style.border = "none";
            category4.style.border = "none";
            break;
        case 4:
            imgSource = "../Bilder/Kategorie4/" + categoryFourImages[counter4];
            category4.style.border = "10px solid #656768";
            category1.style.border = "none";
            category2.style.border = "none";
            category3.style.border = "none";
            break;
    }

    document.body.style.backgroundImage = `url(${imgSource})`;
    var source = document.body.style.backgroundImage;
}